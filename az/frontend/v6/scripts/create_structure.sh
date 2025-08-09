#!/usr/bin/env bash
# emits a path-indented tree with id and label for every content/**/content.ts
set -euo pipefail

(
  if command -v rg >/dev/null 2>&1; then
    rg -n --glob './../content/**/content.ts' \
      -e '^[[:space:]]*id[[:space:]]*:' \
      -e '^[[:space:]]*(name|chapterName|topicName)[[:space:]]*:'
  else
    find content -type f -name 'content.ts' -print0 \
      | xargs -0 grep -nH -E '^[[:space:]]*id[[:space:]]*:|^[[:space:]]*(name|chapterName|topicName)[[:space:]]*:'
  fi
) \
| awk -F: '
  BEGIN{OFS="\t"}
  {
    file=$1; sub(/^\.\//,"",file)
    text=$0; sub(/^[^:]*:[0-9]+:/,"",text)
    files[file]=1
    if (text ~ /^[[:space:]]*id[[:space:]]*:/) {
      match(text, /id[[:space:]]*:[[:space:]]*["'\''`]?([^,"'\''`]+)/, m)
      ids[file]=m[1]
    }
    if (text ~ /^[[:space:]]*(name|chapterName|topicName)[[:space:]]*:/) {
      match(text, /(name|chapterName|topicName)[[:space:]]*:[[:space:]]*["'\''`]?(.*?)[,"'\''`]?[[:space:]]*$/, m)
      labels[file]=m[2]
      kinds[file]=m[1]
    }
  }
  END{
    for (f in files) {
      id = (f in ids ? ids[f] : "-")
      label = (f in labels ? labels[f] : "")
      kind = (f in kinds ? kinds[f] : "")
      print f, id, label, kind
    }
  }' \
| sort \
| awk -F'\t' '
  function indent(n){for(i=0;i<n;i++) printf "  "}
  {
    file=$1; id=$2; name=$3
    sub(/^content\//,"",file)
    sub(/\/content\.ts$/,"",file)
    depth = split(file, parts, "/")
    indent(depth-1)
    printf "- id: %s  name: %s  path: %s\n", id, name, file
  }'