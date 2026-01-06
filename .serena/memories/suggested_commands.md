# ELITE Site - Essential Commands

## Development
```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linter
bun run lint
```

## Bun-Specific Commands
```bash
# Install dependencies
bun install

# Run TypeScript file
bun run file.ts

# Run tests (when implemented)
bun test
```

## Git Commands
```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "message"

# Create new branch
git checkout -b branch-name
```

## File Operations
```bash
# List directory
ls -la

# Find files by pattern
find . -name "*.tsx"

# Search in files
grep -r "pattern" components/

# Watch for changes (in development)
# bun run dev handles this automatically with HMR
```

## Useful Aliases (if configured)
```bash
# Quick dev server
bun dev

# Quick build
bun build
```

## Task Management
```bash
# View tasks (if using taskmaster)
cat .taskmaster/tasks/tasks.json
```
