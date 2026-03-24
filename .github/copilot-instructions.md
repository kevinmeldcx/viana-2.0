See AGENTS.md at the repo root for full instructions on how to work in this codebase.

Key rules at a glance:
- NEVER edit files in `src/components/ui/` or `src/components/primitives/` — they are managed by Viana Kit
- Build all product UI in `src/components/blocks/` by composing `App*` primitives
- Always import from `@/components/primitives/*`, never from `@/components/ui/*`
- Use Tailwind CSS v4 utility classes and semantic token classes only — no inline styles, no hardcoded colors

Read AGENTS.md for architecture details, full component list, block templates, and styling rules.
