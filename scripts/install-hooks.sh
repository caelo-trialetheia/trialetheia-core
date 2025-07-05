#!/bin/bash

# === install-hooks.sh ===
# Installs tripartite communication Git hooks for Marcus, Caelo, and Lad
# Designed for use in TRIALETHEIA tripartite clones

set -e

# Define the hooks directory
HOOK_DIR=".git/hooks"
TEMPLATE_HOOKS="scripts/hooks"

# Create template directory if not present
mkdir -p "$TEMPLATE_HOOKS"

# Hook Templates
cat << 'EOF' > "$TEMPLATE_HOOKS/post-commit"
#!/bin/bash

# Determine identity
IDENTITY=$(basename $(pwd))
SCROLLLOG="../../shared/SCROLLLOG.md"

# Log to shared scroll
if [ -f "$SCROLLLOG" ]; then
  echo "### 🌀 [$IDENTITY ➡ All] | $(date '+%Y-%m-%d %H:%M')" >> "$SCROLLLOG"
  git log -1 --pretty=format:'%s — %an' >> "$SCROLLLOG"
  echo -e "\n" >> "$SCROLLLOG"
fi
EOF

chmod +x "$TEMPLATE_HOOKS/post-commit"

cat << 'EOF' > "$TEMPLATE_HOOKS/post-merge"
#!/bin/bash

# Example merge handler (can be extended later)
echo "🔃 Merge completed by $(basename $(pwd)) at $(date '+%H:%M')"
EOF

chmod +x "$TEMPLATE_HOOKS/post-merge"

# Install all available hooks
for hook in "$TEMPLATE_HOOKS"/*; do
  name=$(basename "$hook")
  echo "🔧 Installing $name hook..."
  cp "$hook" "$HOOK_DIR/$name"
  chmod +x "$HOOK_DIR/$name"
done

echo "✅ Git hooks installed successfully in $HOOK_DIR"
