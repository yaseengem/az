#!/usr/bin/env bash
# Rename all topic folders from "TopicN" to "Topic N" recursively
# Usage:
#   bash scripts/rename_topic_folders.sh [ROOT]
# Env:
#   USE_GIT=1  use git mv if inside a git repo

set -euo pipefail

ROOT="${1:-/home/track/pro/az/frontend/v6/content}"
USE_GIT="${USE_GIT:-0}"

if [[ ! -d "$ROOT" ]]; then
  echo "Root directory not found: $ROOT" >&2
  exit 1
fi

# Process deepest paths first to avoid conflicts while renaming
while IFS= read -r -d '' dir; do
  base="$(basename "$dir")"
  if [[ "$base" =~ ^Topic([0-9]+)$ ]]; then
    num="${BASH_REMATCH[1]}"
    new_base="Topic ${num}"
    parent="$(dirname "$dir")"
    src="$dir"
    dst="${parent}/${new_base}"

    if [[ "$src" == "$dst" ]]; then
      continue
    fi
    if [[ -e "$dst" ]]; then
      echo "Skip (exists): $dst"
      continue
    fi

    echo "Renaming: $src -> $dst"
    if [[ "$USE_GIT" == "1" ]] && command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
      git mv "$src" "$dst"
    else
      mv "$src" "$dst"
    fi
  fi
done < <(find "$ROOT" -type d -name 'Topic[0-9]*' -depth -print0)

echo "Done."
