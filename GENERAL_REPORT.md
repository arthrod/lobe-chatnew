# General Repo Overview

The project is an open-source ChatGPT/LLM UI framework built on **Next.js** with features like speech synthesis, multi-modal support, and an extensible plugin system.

Main directories include:

- `apps`
- `docs`
- `src`
- `tests`
- other supporting folders

Within `src`, key folders are `app`, `components`, `config`, `features`, `services`, and `store`. These hold application logic, UI components, configuration files, feature modules, backend services, and Zustand state management code respectively.

Documentation describes a Next.js frontend working with an Edge Runtime API, an Agents Market, and a Plugin Market.

Default user preferences are defined in `src/const/user.ts`.

## Tree Map (depth 2 excluding node_modules)

```
.
./.cursor
./.cursor/rules
./.devcontainer
./.git
./.git/branches
./.git/hooks
./.git/info
./.git/logs
./.git/objects
./.git/refs
./.github
./.github/ISSUE_TEMPLATE
./.github/scripts
./.github/workflows
./.husky
./.husky/_
./__mocks__
./__mocks__/zustand
./apps
./apps/desktop
./changelog
./docker-compose
./docker-compose/local
./docker-compose/production
./docs
./docs/changelog
./docs/development
./docs/self-hosting
./docs/usage
./docs/wiki
./locales
./locales/ar
./locales/bg-BG
./locales/de-DE
./locales/en-US
./locales/es-ES
./locales/fa-IR
./locales/fr-FR
./locales/it-IT
./locales/ja-JP
./locales/ko-KR
./locales/nl-NL
./locales/pl-PL
./locales/pt-BR
./locales/ru-RU
./locales/tr-TR
./locales/vi-VN
./locales/zh-CN
./locales/zh-TW
./packages
./packages/electron-client-ipc
./packages/electron-server-ipc
./packages/file-loaders
./packages/web-crawler
./public
./public/icons
./public/images
./public/og
./public/screenshots
./public/videos
./scripts
./scripts/buildSitemapIndex
./scripts/cdnWorkflow
./scripts/changelogWorkflow
./scripts/dbmlWorkflow
./scripts/docsWorkflow
./scripts/electronWorkflow
./scripts/i18nWorkflow
./scripts/mdxWorkflow
./scripts/migrateClientDB
./scripts/migrateServerDB
./scripts/readmeWorkflow
./scripts/serverLauncher
./src
./src/app
./src/chains
./src/components
./src/config
./src/const
./src/database
./src/envs
./src/features
./src/hooks
./src/layout
./src/libs
./src/locales
./src/migrations
./src/prompts
./src/server
./src/services
./src/store
./src/styles
./src/tools
./src/types
./src/utils
./tests
```
