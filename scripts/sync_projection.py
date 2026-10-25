#!/usr/bin/env python3
"""Copy only the validated public projection; preserve unrelated repository files."""
import argparse,hashlib,json,re
from pathlib import Path,PurePosixPath

def safe(name):
 p=PurePosixPath(name)
 return not p.is_absolute() and '..' not in p.parts and '\\' not in name and (name in {'.nojekyll','BUILD.json','robots.txt','sitemap.xml'} or (name.endswith('.html') and not name.startswith('.')) or name.startswith(('assets/','reference/','data/')))
def sync(source,destination,source_sha):
 source=source.resolve();destination=destination.resolve()
 if source==destination or not re.fullmatch('[0-9a-f]{40}',source_sha):raise ValueError('invalid projection destination/source identity')
 manifest=destination/'MANAGED.json';old=json.loads(manifest.read_text()).get('files',[]) if manifest.is_file() else []
 if any(not safe(p) for p in old):raise ValueError('unsafe previous public manifest')
 files={}
 for p in source.rglob('*'):
  if p.is_symlink():raise ValueError('projection symlink not permitted')
  if not p.is_file():continue
  name=p.relative_to(source).as_posix()
  if not safe(name) or p.stat().st_size>4*1024*1024:raise ValueError('unapproved public projection file '+name)
  data=p.read_bytes()
  if re.search(rb'(gh[pousr]_[A-Za-z0-9]{30,}|-----BEGIN [A-Z ]*PRIVATE KEY-----)',data):raise ValueError('credential pattern')
  files[name]=data
 if not {'index.html','catalog.html','data/catalog.json','BUILD.json'}.issubset(files):raise ValueError('incomplete projection')
 # Enforce existing destination paths stay inside this repository, including parents.
 for name in set(old)|set(files):
  dest=destination/name
  if dest.is_symlink() or not dest.resolve().is_relative_to(destination):raise ValueError('unsafe destination '+name)
 for name in old:
  if name not in files and (destination/name).is_file():(destination/name).unlink()
 for name,data in files.items():
  dest=destination/name;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(data)
 manifest.write_text(json.dumps({'schema_version':1,'canonical_repository':'gorazana/ecosystem','source_sha':source_sha,'files':sorted(files),'sha256':{p:hashlib.sha256(d).hexdigest() for p,d in sorted(files.items())}},indent=2)+'\n')
 return len(files)
if __name__=='__main__':
 a=argparse.ArgumentParser();a.add_argument('--source',type=Path,required=True);a.add_argument('--destination',type=Path,required=True);a.add_argument('--source-sha',required=True);v=a.parse_args();print('Public files synchronized:',sync(v.source,v.destination,v.source_sha))
