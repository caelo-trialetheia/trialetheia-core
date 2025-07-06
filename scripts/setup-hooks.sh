#!/bin/bash
# setup-hooks.sh — Installs Git hooks from scripts/hooks to .git/hooks

SOURCE_DIR="$(pwd)/scripts/hooks"
TARGET_DIR="$(pwd)/.git/hooks"

echo "📎 Installing Git hooks from: $SOURCE_DIR to $TARGET_DIR"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Source hooks directory not found: $SOURCE_DIR"
  exit 1
fi

mkdir -p "$TARGET_DIR"

for hook in "$SOURCE_DIR"/*; do
  cp "$hook" "$TARGET_DIR"/
  chmod +x "$TARGET_DIR/$(basename "$hook")"
done

echo "✅ Hooks installed and executable in: $TARGET_DIR"

