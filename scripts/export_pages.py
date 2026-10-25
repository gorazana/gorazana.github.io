#!/usr/bin/env python3
"""Export only checksum-verified managed public files to a fresh Pages artifact."""
from __future__ import annotations
import argparse
import hashlib
import json
import re
import shutil
from pathlib import Path, PurePosixPath


def safe(name: str) -> bool:
    if not isinstance(name, str) or not name or '\\' in name:
        return False
    p = PurePosixPath(name)
    return (not p.is_absolute() and '..' not in p.parts and str(p) == name
            and (name in {'.nojekyll', 'BUILD.json', 'robots.txt', 'sitemap.xml'}
                 or (name.endswith('.html') and not name.startswith('.'))
                 or name.startswith(('assets/', 'reference/', 'data/'))))


def export(source: Path, output: Path) -> int:
    source = source.resolve()
    if output.exists() or output.is_symlink():
        raise ValueError('Pages artifact destination must be new')
    if output.resolve() == source or source.is_relative_to(output.resolve()):
        raise ValueError('Pages artifact cannot contain source checkout')
    manifest_file = source / 'MANAGED.json'
    if manifest_file.is_symlink():
        raise ValueError('Manifest symlinks are not permitted')
    manifest = json.loads(manifest_file.read_text())
    files, hashes = manifest.get('files'), manifest.get('sha256')
    if (manifest.get('schema_version') != 1
            or manifest.get('canonical_repository') != 'gorazana/ecosystem'
            or not re.fullmatch(r'[0-9a-f]{40}', manifest.get('source_sha', ''))
            or not isinstance(files, list) or not isinstance(hashes, dict)
            or len(files) != len(set(files)) or set(files) != set(hashes)
            or not {'index.html', 'catalog.html', 'data/catalog.json', 'BUILD.json'}.issubset(files)):
        raise ValueError('Incomplete or malformed public manifest')
    verified = []
    for name in files:
        if not safe(name):
            raise ValueError('Unapproved public path')
        p = source / name
        if (any(x.is_symlink() for x in [p, *p.parents] if x != source.parent)
                or not p.resolve().is_relative_to(source) or not p.is_file()
                or p.stat().st_size > 4 * 1024 * 1024):
            raise ValueError('Invalid public file')
        raw = p.read_bytes()
        if (not re.fullmatch(r'[0-9a-f]{64}', str(hashes[name]))
                or hashlib.sha256(raw).hexdigest() != hashes[name]
                or re.search(rb'(gh[pousr]_[A-Za-z0-9]{30,}|-----BEGIN [A-Z ]*PRIVATE KEY-----)', raw)):
            raise ValueError('Public file failed checksum or credential guard')
        verified.append((name, raw))
    # Validate everything before creating the artifact; no partial upload on failure.
    output.mkdir(parents=True)
    try:
        for name, raw in verified:
            p = output / name
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_bytes(raw)
    except Exception:
        shutil.rmtree(output)
        raise
    return len(verified)


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--source', type=Path, required=True)
    ap.add_argument('--output', type=Path, required=True)
    args = ap.parse_args()
    print('Verified public artifact files:', export(args.source, args.output))
