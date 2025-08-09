#!/usr/bin/env bash
# Emits a path-indented tree with id and label for every content/**/content.ts
# Usage:
#   ./scripts/create_structure.sh [CONTENT_DIR]
# Example to save output:
#   ./scripts/create_structure.sh > scripts/structure.txt
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
CONTENT_DIR="${1:-${REPO_ROOT}/content}"

if [[ ! -d "$CONTENT_DIR" ]]; then
  echo "Content directory not found: $CONTENT_DIR" >&2
  exit 1
fi

(
  cd "$CONTENT_DIR"
  if command -v rg >/dev/null 2>&1; then
    rg -n --no-messages -g '**/content.ts' \
      -e '^[[:space:]]*id[[:space:]]*:' \
      -e '^[[:space:]]*(name|chapterName|topicName)[[:space:]]*:' .
  else
    LC_ALL=C.UTF-8 find . -type f -name 'content.ts' -print0 \
      | xargs -0 grep -a -nH -E '^[[:space:]]*id[[:space:]]*:|^[[:space:]]*(name|chapterName|topicName)[[:space:]]*:'
  fi
) \
| awk -F: '
  BEGIN{OFS="\t"}
  {
    file=$1; sub(/^\.\//,"",file)
    abs = "content/" file
    text=$0; sub(/^[^:]*:[0-9]+:/,"",text)
    files[abs]=1
    if (text ~ /^[[:space:]]*id[[:space:]]*:/) {
      match(text, /id[[:space:]]*:[[:space:]]*["`]?([^,]+)/, m)
      idv=m[1]
      gsub(/[\r\n]+/, " ", idv)
      gsub(/\047/, "", idv)
      sub(/^[[:space:]]*["`]+/, "", idv)
      sub(/["`,[:space:]]+$/, "", idv)
      ids[abs]=idv
    }
    if (text ~ /^[[:space:]]*(name|chapterName|topicName)[[:space:]]*:/) {
      match(text, /(name|chapterName|topicName)[[:space:]]*:[[:space:]]*["`]?([^][\r\n]*)$/, m)
      lab=m[2]
      gsub(/[\r\n]+/, " ", lab)
      gsub(/\047/, "", lab)
      sub(/^[[:space:]]*["`]+/, "", lab)
      sub(/["`,[:space:]]+$/, "", lab)
      labels[abs]=lab
    }
  }
  END{
    for (f in files) {
      rel=f; sub(/^content\//,"",rel); sub(/\/content\.ts$/,"",rel)
      depth = split(rel, parts, "/")
      id = (f in ids ? ids[f] : "-")
      label = (f in labels ? labels[f] : "")
      print rel, depth, id, label
    }
  }' \
| sort -t $'\t' -k1,1V -k2,2n \
| awk -F'\t' '
  function indent(n){for(i=0;i<n;i++) printf "  "}
  {
    rel=$1; depth=$2; id=$3; name=$4
    indent(depth-1)
    printf "- id: %s  name: %s  path: %s\n", id, name, rel
  }'