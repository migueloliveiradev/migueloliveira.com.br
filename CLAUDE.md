@AGENTS.md

# Commits

- Write commit messages in **English**.
- Always follow [Conventional Commits](https://www.conventionalcommits.org/): `<type>(<optional scope>): <description>`.
  - Types: `feat`, `fix`, `style`, `refactor`, `perf`, `docs`, `test`, `build`, `ci`, `chore`, `revert`.
  - Description in the imperative mood, lowercase, no trailing period (e.g. `feat(header): add mobile menu`).
  - Breaking changes use `!` after the type/scope and a `BREAKING CHANGE:` footer.
- Keep commits **granular**: one logical change per commit. Split unrelated changes (e.g. config, content, components, docs) into separate commits instead of a single large one.
