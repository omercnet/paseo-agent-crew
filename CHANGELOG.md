# Changelog

## Unreleased

### Migration

- migrate the plugin to the Paseo 0.8 runtime-entry layout
- move client modules under `client/` and shared code under `shared/`
- switch to first-class `parentAgentId` handling with bounded cycles
- add an explicit pending-permission modal with Allow and Deny actions
- pin Paseo plugin packages to `0.8.0-beta.1`

## [0.2.0](https://github.com/omercnet/paseo-agent-crew/compare/v0.1.0...v0.2.0) (2026-09-08)


### Features

* migrate agent crew to paseo 0.8 ([#3](https://github.com/omercnet/paseo-agent-crew/issues/3)) ([3014f1c](https://github.com/omercnet/paseo-agent-crew/commit/3014f1c2f1afb8187cb2ac0e86f2b442bb805911))

## 0.1.0 (2026-09-02)

### Features

- add the workspace-wide Agent Crew Explorer panel
- organize managed agents into collapsible cross-workspace delegation trees
- add status filters, search, navigation, and guarded agent controls
