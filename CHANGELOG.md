## 7.0.0-alpha.26 (August 26, 2022)

#### Features

-   CLI: Add react, vue3, and svelte vite to new-frameworks automigration [#19016](https://github.com/storybooks/storybook/pull/19016)
-   Svelte: Add svelte-vite framework [#18978](https://github.com/storybooks/storybook/pull/18978)

#### Bug Fixes

-   Core: Fix default story glob [#19018](https://github.com/storybooks/storybook/pull/19018)

#### Dependency Upgrades

-   React-vite: update/cleanup dependencies [#19025](https://github.com/storybooks/storybook/pull/19025)
-   Remove babel-loader from core-common [#19022](https://github.com/storybooks/storybook/pull/19022)

## 7.0.0-alpha.25 (August 25, 2022)

#### Features

-   Vite: Add builder-vite, react-vite, and vue3-vite [#19007](https://github.com/storybooks/storybook/pull/19007)

#### Maintenance

-   CI: use runner with playwright installed for cra_bench [#18951](https://github.com/storybooks/storybook/pull/18951)
-   Replace rollup-plugin-node-polyfills to analogs [#18975](https://github.com/storybooks/storybook/pull/18975)

## 7.0.0-alpha.24 (August 24, 2022)

#### Breaking changes

-   Preview: Rename Storybook DOM root IDs [#10638](https://github.com/storybooks/storybook/pull/10638)

  #### Features

-   Interactions: Add `step` function and support multiple levels of nesting [#18555](https://github.com/storybooks/storybook/pull/18555)

  #### Bug Fixes

-   Addon-docs: Fix canvas support expand code for non-story [#18808](https://github.com/storybooks/storybook/pull/18808)
-   Components: Avoid including line numbers when copying the code [#18725](https://github.com/storybooks/storybook/pull/18725)
-   Vue: Fix enum check in extractArgTypes [#18959](https://github.com/storybooks/storybook/pull/18959)
-   Core: Fix frameworkOptions preset [#18979](https://github.com/storybooks/storybook/pull/18979)

 #### Maintenance

-   Addon-a11y: Remove achromatomaly color filter [#18852](https://github.com/storybooks/storybook/pull/18852)
-   Build: Use ts-up to build core-webpack [#18912](https://github.com/storybooks/storybook/pull/18912)
-   Build: Use ts-up to build addon-viewport [#18943](https://github.com/storybooks/storybook/pull/18943)
-   Build: Improve generate-repros-next [#19001](https://github.com/storybooks/storybook/pull/19001)
-   Examples: Remove refs in angular example [#18986](https://github.com/storybooks/storybook/pull/18986)
-   Build: Use ts-up to build client-logger [#18893](https://github.com/storybooks/storybook/pull/18893)
-   Generate-repros: Run local registry on `--local-registry` option [#18997](https://github.com/storybooks/storybook/pull/18997)
-   Build: Remove unused bootstrap --cleanup [#18981](https://github.com/storybooks/storybook/pull/18981)
-   CLI: Fix local repro publishing [#18977](https://github.com/storybooks/storybook/pull/18977)
-   Build: Run verdaccio on 6001 to enable web UI [#18983](https://github.com/storybooks/storybook/pull/18983)
-   CLI: determine whether to add interactive stories from `renderer` rather than `framework` [#18968](https://github.com/storybooks/storybook/pull/18968)
-   CLI: Auto-accept migrations when running `generate-repros-next` [#18969](https://github.com/storybooks/storybook/pull/18969)

  ## 7.0.0-alpha.23 (August 18, 2022)

  #### Features

-   UI: Polish canvas and sidebar for 7.0 [#18894](https://github.com/storybooks/storybook/pull/18894)

 #### Maintenance

-   Sandbox: Add ability to run from local repro [#18950](https://github.com/storybooks/storybook/pull/18950)
-   Repros: Add ability to generate repros using local registry [#18948](https://github.com/storybooks/storybook/pull/18948)
-   CLI: Move write/read package json into JsPackageManager [#18942](https://github.com/storybooks/storybook/pull/18942)


## 7.0.0-alpha.22 (August 18, 2022)

Failed publish to npm

## 7.0.0-alpha.21 (August 17, 2022)

#### Maintenance

-   UI: Update every icon for v7 design [#18809](https://github.com/storybooks/storybook/pull/18809)

## 7.0.0-alpha.20 (August 16, 2022)

#### Features

-   CLI: Automigration for new frameworks [#18919](https://github.com/storybooks/storybook/pull/18919)

#### Bug Fixes

-   UI: Fix the order of addons appearing in prebuilt manager [#18918](https://github.com/storybooks/storybook/pull/18918)

#### Maintenance

-   Exit sandbox gracefully on cancel [#18936](https://github.com/storybooks/storybook/pull/18936)
-   Disable telemetry in monorepo and CI [#18935](https://github.com/storybooks/storybook/pull/18935)
-   Convert cypress e2e tests to playwright [#18932](https://github.com/storybooks/storybook/pull/18932)
-   CI: Refactor to use tasks [#18922](https://github.com/storybooks/storybook/pull/18922)
-   Angular: Add renderer components / stories [#18934](https://github.com/storybooks/storybook/pull/18934)
-   Examples: Add angular repro template and refactor [#18931](https://github.com/storybooks/storybook/pull/18931)

## 7.0.0-alpha.19 (August 12, 2022)

#### Features

-   CLI: add "storybook scripts 7.0" automigrate command [#18769](https://github.com/storybooks/storybook/pull/18769)
-   Interactions: Run conditionally based on query param [#18706](https://github.com/storybooks/storybook/pull/18706)

#### Bug Fixes

-   API: Return defaultValue in useParameter if story is not prepared [#18887](https://github.com/storybooks/storybook/pull/18887)
-   Store: always call composeConfigs in setProjectAnnotations [#18916](https://github.com/storybooks/storybook/pull/18916)
-   CLI: install the same version as the user in sb-scripts automigration [#18917](https://github.com/storybooks/storybook/pull/18917)
-   Theming: Add `create` export for lib/theming [#18906](https://github.com/storybooks/storybook/pull/18906)
-   Telemetry: Improve addon extraction logic [#18868](https://github.com/storybooks/storybook/pull/18868)
-   UI: Add image support to builder-manager [#18857](https://github.com/storybooks/storybook/pull/18857)
-   ArgTypes: Fix check for undefined before [#18710](https://github.com/storybooks/storybook/pull/18710)

#### Maintenance

-   Build: use ts-up to build addon-toolbars [#18847](https://github.com/storybooks/storybook/pull/18847)
-   Build: Use ts-up to build channels [#18882](https://github.com/storybooks/storybook/pull/18882)
-   Build: Use ts-up to build addon-links [#18908](https://github.com/storybooks/storybook/pull/18908)
-   CLI: Fix remove dependencies logic [#18905](https://github.com/storybooks/storybook/pull/18905)
-   CLI: Add uninstall deps to jsPackageManager [#18900](https://github.com/storybooks/storybook/pull/18900)
-   Examples: Improve sandbox command error handling and debugging [#18869](https://github.com/storybooks/storybook/pull/18869)
-   Examples: Change to self-hosted placeholder images [#18878](https://github.com/storybooks/storybook/pull/18878)
-   CLI: add --no-init to repro-next command [#18866](https://github.com/storybooks/storybook/pull/18866)
-   Build: Got verdaccio working, borrowing heavily from the old repro command [#18844](https://github.com/storybooks/storybook/pull/18844)
-   Core-server: Move webpack to be a devDependency [#18856](https://github.com/storybooks/storybook/pull/18856)

## 7.0.0-alpha.18 (August 2, 2022)

#### Features

-   CLI: Add temporary sb repro-next command that only degits repros [#18834](https://github.com/storybooks/storybook/pull/18834)
-   Interactions: Add step function to play context [#18673](https://github.com/storybooks/storybook/pull/18673)
-   UI: Add preloading to stories highlighted in the sidebar [#17964](https://github.com/storybooks/storybook/pull/17964)

#### Bug Fixes

-   UI: Fix refs with authentication being broken if the fetch for `iframe.html` succeeds (but with a request to authenticate) [#18160](https://github.com/storybooks/storybook/pull/18160)
-   HTML: Fix missing ability to set `docs.extractArgTypes` [#18831](https://github.com/storybooks/storybook/pull/18831)
-   React: Fix callback behavior in `react@18` [#18737](https://github.com/storybooks/storybook/pull/18737)
-   CLI: Throw error on failure in sb init [#18816](https://github.com/storybooks/storybook/pull/18816)
-   CLI: Fix package.json version detection [#18806](https://github.com/storybooks/storybook/pull/18806)

#### Maintenance

-   Build: Use ts-up to build `addon-outline` [#18842](https://github.com/storybooks/storybook/pull/18842)
-   Core: Fix default framework options handling [#18676](https://github.com/storybooks/storybook/pull/18676)
-   Build: Use tsup to build `addon-measure` and fix related imports in `examples/official-storybook` [#18837](https://github.com/storybooks/storybook/pull/18837)
-   Build: Use tsup to build addon-jest [#18836](https://github.com/storybooks/storybook/pull/18836)
-   Examples: Use `repro-next` in the example script! [#18839](https://github.com/storybooks/storybook/pull/18839)
-   Examples: Rename `example` => `sandbox` [#18838](https://github.com/storybooks/storybook/pull/18838)
-   Examples: Use a set of test components in addon stories [#18825](https://github.com/storybooks/storybook/pull/18825)
-   Examples: Copy example stories over from renderer + addons [#18824](https://github.com/storybooks/storybook/pull/18824)
-   Examples: Set `resolve.symlinks` based on node option [#18827](https://github.com/storybooks/storybook/pull/18827)
-   Examples: Add command to publish repros + GH action [#18800](https://github.com/storybooks/storybook/pull/18800)
-   Examples: Create a new `yarn example` command [#18781](https://github.com/storybooks/storybook/pull/18781)
-   Build: Fix yarn build command [#18817](https://github.com/storybooks/storybook/pull/18817)
-   Build: Use tsup to build core-event [#18798](https://github.com/storybooks/storybook/pull/18798)

## 7.0.0-alpha.17 (July 27, 2022)

#### Features

-   Addon-docs: Support DocsPage in v6 store [#18763](https://github.com/storybooks/storybook/pull/18763)

#### Bug Fixes

-   Preact: Typescript pragma fix [#15564](https://github.com/storybooks/storybook/pull/15564)
-   Core: Clear addon cache directory before starting the manager [#18731](https://github.com/storybooks/storybook/pull/18731)
-   UI: Pass full docs options to manager [#18762](https://github.com/storybooks/storybook/pull/18762)
-   Preview: Fix standalone MDX files not HMR-ing [#18747](https://github.com/storybooks/storybook/pull/18747)

#### Maintenance

-   CLI: Add next-repro command [#18787](https://github.com/storybooks/storybook/pull/18787)
-   Build: Remove old scripts that are no longer used [#18790](https://github.com/storybooks/storybook/pull/18790)
-   Build: Addon-backgrounds with ts-up [#18784](https://github.com/storybooks/storybook/pull/18784)
-   Build: Addon-controls with tsup [#18786](https://github.com/storybooks/storybook/pull/18786)
-   Build: Use updated circleci node images [#18785](https://github.com/storybooks/storybook/pull/18785)
-   Build: Move all code into a `code` directory [#18759](https://github.com/storybooks/storybook/pull/18759)
-   Build: Lint css, html, json, md, mdx, yml files [#18735](https://github.com/storybooks/storybook/pull/18735)

## 7.0.0-alpha.16 (July 25, 2022)

#### Bug Fixes

- Addon docs: Pass remarks plugins to mdx loader [#18740](https://github.com/storybooks/storybook/pull/18740)
- Preview: Ensure docs container re-renders when globals change [#18711](https://github.com/storybooks/storybook/pull/18711)
- Core: Set other manager-side constants in build [#18728](https://github.com/storybooks/storybook/pull/18728)
- CLI: Fix detection of type: module when initializing storybook [#18714](https://github.com/storybooks/storybook/pull/18714)
- UI: Include full URL in the "Copy Canvas Link" button [#17498](https://github.com/storybooks/storybook/pull/17498)
- Toolbars: Fallback to name if title and icon are unspecified [#17430](https://github.com/storybooks/storybook/pull/17430)
- CLI: Fix addons register in RN template [#18693](https://github.com/storybooks/storybook/pull/18693)
- Index: Support `{ csfData as default }` CSF exports [#18588](https://github.com/storybooks/storybook/pull/18588)
- Svelte: Always create main with cjs extension [#18648](https://github.com/storybooks/storybook/pull/18648)

#### Maintenance

- Build addons/a11y with ts-up [#18772](https://github.com/storybooks/storybook/pull/18772)
- Typescript: Drop Emotion 10 types in lib/theming [#18598](https://github.com/storybooks/storybook/pull/18598)
- Tests: Don't run the docs e2e in `react@18` [#18736](https://github.com/storybooks/storybook/pull/18736)
- Addon-docs: Localize channel to docs context [#18730](https://github.com/storybooks/storybook/pull/18730)
- Addon-docs: Move DocsRenderer back to addon-docs [#18708](https://github.com/storybooks/storybook/pull/18708)
- Addon-docs: Remove `AddContext` from mdx packages [#18709](https://github.com/storybooks/storybook/pull/18709)
- Preview: Simplify docsMode [#18729](https://github.com/storybooks/storybook/pull/18729)
- Examples: Upgrade @storybook/jest in examples [#18582](https://github.com/storybooks/storybook/pull/18582)
- Svelte: Make `svelte-loader` optional dependency [#18645](https://github.com/storybooks/storybook/pull/18645)
- Build: Fix dts-localize script for windows [#18664](https://github.com/storybooks/storybook/pull/18664)

#### Dependency Upgrades

- Storyshots: Allow react-test-renderer 18 [#18296](https://github.com/storybooks/storybook/pull/18296)
- Core: Remove unnecessary webpack dependency [#18651](https://github.com/storybooks/storybook/pull/18651)

## 7.0.0-alpha.15 (July 25, 2022)

Failed publish

## 7.0.0-alpha.14 (July 25, 2022)

Failed publish

## 7.0.0-alpha.13 (July 11, 2022)

### Features

- UI: Remove docs tab ([#18677](https://github.com/storybookjs/storybook/pull/18677))

### Bug Fixes

- Index: Don't prepend `titlePrefix` to a docs entry that references a CSF file's title ([#18634](https://github.com/storybookjs/storybook/pull/18634))

### Maintenance

- Addon-dcos: Refactor DocsRender/Context ([#18635](https://github.com/storybookjs/storybook/pull/18635))
- Instrumenter: `SyncPayload` type for `sync` event ([#18674](https://github.com/storybookjs/storybook/pull/18674))

## 7.0.0-alpha.12 (July 7, 2022)

### Features

- Addon-docs: Produce docs page entries in the index ([#18574](https://github.com/storybookjs/storybook/pull/18574))
- Svelte: Supports action auto configuration ([#18174](https://github.com/storybookjs/storybook/pull/18174))
- Addon-docs: Add docs index configuration via main.js ([#18573](https://github.com/storybookjs/storybook/pull/18573))
- Preview: Handle new docs-page index entries ([#18595](https://github.com/storybookjs/storybook/pull/18595))

### Bug Fixes

- CLI: Remove addon-actions install from `sb init` ([#18255](https://github.com/storybookjs/storybook/pull/18255))
- Angular: Fix compodoc with spaces in workspace root ([#18140](https://github.com/storybookjs/storybook/pull/18140))
- Core: Add type guard for globalWindow ([#18251](https://github.com/storybookjs/storybook/pull/18251))
- Core: Fix builder stats typings to be optional ([#18377](https://github.com/storybookjs/storybook/pull/18377))

### Maintenance

- Core: Async load presets, replace interpret with esbuild-register ([#18619](https://github.com/storybookjs/storybook/pull/18619))
- Build: Improve linting a bit ([#18642](https://github.com/storybookjs/storybook/pull/18642))

### Dependency Upgrades

- Deps: Use `dequal` for equality checks ([#18608](https://github.com/storybookjs/storybook/pull/18608))

## 7.0.0-alpha.11 (July 6, 2022)

### Features

- Interactions: Show exceptions by non-instrumented code in panel ([#16592](https://github.com/storybookjs/storybook/pull/16592))

### Maintenance

- Build: Add linter for ejs ([#18637](https://github.com/storybookjs/storybook/pull/18637))
- Core: Improve interopRequireDefault ([#18638](https://github.com/storybookjs/storybook/pull/18638))
- Core: Pre-built manager using esbuild ([#18550](https://github.com/storybookjs/storybook/pull/18550))
- Build: Add check-packages script plus misc improvements ([#18633](https://github.com/storybookjs/storybook/pull/18633))
- Core: Typing useArgs ([#17735](https://github.com/storybookjs/storybook/pull/17735))
- Build: Add a check script to each package ([#18603](https://github.com/storybookjs/storybook/pull/18603))
- Build: Use playwright in benchmark ([#18606](https://github.com/storybookjs/storybook/pull/18606))

## 7.0.0-alpha.10 (July 2, 2022)

### Features

- Addon-docs: Include Vue methods in ArgsTable ([#18609](https://github.com/storybookjs/storybook/pull/18609))
- UI: Fix default theme according to preferred color scheme ([#17311](https://github.com/storybookjs/storybook/pull/17311))
- Storyshots: Add SnapshotsWithOptionsArgType ([#15712](https://github.com/storybookjs/storybook/pull/15712))
- Controls: Add max length config to text control ([#14396](https://github.com/storybookjs/storybook/pull/14396))

### Bug Fixes

- CLI/HTML: Improve HTML typescript stories ([#18618](https://github.com/storybookjs/storybook/pull/18618))
- Controls: Throttle color controls and make `updateArgs` and `resetArgs` stable ([#18335](https://github.com/storybookjs/storybook/pull/18335))
- Controls: Silence unexpected control type enum for color matchers ([#16334](https://github.com/storybookjs/storybook/pull/16334))
- UI: Stop add-on Draggable from overlapping the vertical scrollbar when stories overflow ([#17663](https://github.com/storybookjs/storybook/pull/17663))
- React: Fix source snippet decorator for story functions with suspense ([#17915](https://github.com/storybookjs/storybook/pull/17915))
- Core: Avoid logging an object on compilation errors ([#15885](https://github.com/storybookjs/storybook/pull/15885))
- UI: Fix router handling of URLs containing "settings" ([#16245](https://github.com/storybookjs/storybook/pull/16245))
- UI: Fix viewMode handling on navigation ([#16912](https://github.com/storybookjs/storybook/pull/16912))
- UI: Fix loading title ([#17935](https://github.com/storybookjs/storybook/pull/17935))

### Maintenance

- Examples/Vue: Fix missing a vue-template-compiler dependency ([#17485](https://github.com/storybookjs/storybook/pull/17485))
- Fix homepage core-server ([#18121](https://github.com/storybookjs/storybook/pull/18121))
- UI: Replace references to `themes.normal` with `themes.light` ([#17034](https://github.com/storybookjs/storybook/pull/17034))

### Dependency Upgrades

- Upgrade file-system-cache to 2.0.0 and remove custom types ([#18253](https://github.com/storybookjs/storybook/pull/18253))
- Security: Update x-default-browser and fix issue with package. ([#18277](https://github.com/storybookjs/storybook/pull/18277))
- Update puppeteer dependencies version ([#15163](https://github.com/storybookjs/storybook/pull/15163))
- Upgrade react-syntax-highlighter to v15.5.0 ([#18009](https://github.com/storybookjs/storybook/pull/18009))

## 7.0.0-alpha.9 (July 2, 2022)

Failed publish

## 7.0.0-alpha.8 (June 29, 2022)

### Features

- Webpack: Support .cjs extension ([#18502](https://github.com/storybookjs/storybook/pull/18502))

### Maintenance

- Docs2: Extract doc blocks into a separate package ([#18587](https://github.com/storybookjs/storybook/pull/18587))

## 7.0.0-alpha.7 (June 29, 2022)

### Features

- TypeScript: Re-structure types for frameworks and presets ([#18504](https://github.com/storybookjs/storybook/pull/18504))
- UI: Add parent wildcard sortOrder ([#18243](https://github.com/storybookjs/storybook/pull/18243))

### Bug Fixes

- UI: Fix typo in CSS pseudo selector ([#17708](https://github.com/storybookjs/storybook/pull/17708))
- UI: Fix sidebar a11y by moving aria-expanded attribute to button ([#18354](https://github.com/storybookjs/storybook/pull/18354))
- CLI: Hook up the npm7 migration ([#18522](https://github.com/storybookjs/storybook/pull/18522))

### Maintenance

- Build: Use TSUP to compile `core-common` ([#18546](https://github.com/storybookjs/storybook/pull/18546))
- Build: Use TSUP to compile the presets ([#18544](https://github.com/storybookjs/storybook/pull/18544))
- Build: Use TSUP to compile the frameworks ([#18543](https://github.com/storybookjs/storybook/pull/18543))
- Build: Use TSUP to compile the renderers ([#18534](https://github.com/storybookjs/storybook/pull/18534))
- Essentials: Add highlight addon ([#17800](https://github.com/storybookjs/storybook/pull/17800))
- Core: Replace `cpy` with `fs-extra` copy/copyFile ([#18497](https://github.com/storybookjs/storybook/pull/18497))
- Build: Enable Template.bind({}) TS support in our repo ([#18540](https://github.com/storybookjs/storybook/pull/18540))
- Turn on strict types in store + preview-web ([#18536](https://github.com/storybookjs/storybook/pull/18536))
- Addon-highlight: Convert to simplified addon style ([#17991](https://github.com/storybookjs/storybook/pull/17991))

### Dependency Upgrades

- Upgrade @storybook/testing-library to `0.0.14-next.0` ([#18539](https://github.com/storybookjs/storybook/pull/18539))

## 7.0.0-alpha.6 (June 21, 2022)

### Bug Fixes

- Interactions: Reset instrumenter state on HMR ([#18516](https://github.com/storybookjs/storybook/pull/18516))
- Interactions: Prevent showing child exception while parent is still playing ([#18518](https://github.com/storybookjs/storybook/pull/18518))

### Maintenance

- Docs2 core: Fetch `index.json` for composition ([#18521](https://github.com/storybookjs/storybook/pull/18521))
- Addon-docs: Switch Meta block to receive all module exports ([#18514](https://github.com/storybookjs/storybook/pull/18514))
- Re-add deprecated fields to lib/api ([#18488](https://github.com/storybookjs/storybook/pull/18488))
- Core: Handle v3 index in composition ([#18498](https://github.com/storybookjs/storybook/pull/18498))
- Story index: Ensure that `extract` script works and SBs can be composed into v6 storybooks ([#18409](https://github.com/storybookjs/storybook/pull/18409))
- Docs2: Handle new docs entries in the preview ([#18099](https://github.com/storybookjs/storybook/pull/18099))
- Docs2: Refactor manager to use new index data ([#18023](https://github.com/storybookjs/storybook/pull/18023))

## 7.0.0-alpha.5 (June 20, 2022)

### Bug Fixes

- Core: Allow a teardown function to be returned from `renderToDOM` ([#18457](https://github.com/storybookjs/storybook/pull/18457))
- CLI: Add npm7 migration for legacy peer deps ([#18510](https://github.com/storybookjs/storybook/pull/18510))
- Interactions: Fix broken UI on nested interactions ([#18499](https://github.com/storybookjs/storybook/pull/18499))

### Maintenance

- Build: Upgrade yarn to 3.2.1 ([#18511](https://github.com/storybookjs/storybook/pull/18511))

## 7.0.0-alpha.4 (June 19, 2022)

### Breaking Changes

- Core: Remove standalone node APIs ([#18089](https://github.com/storybookjs/storybook/pull/18089))

### Maintenance

- Build: Add logFilters to yarn config ([#18500](https://github.com/storybookjs/storybook/pull/18500))
- Build: Set typescript strict-mode ([#18493](https://github.com/storybookjs/storybook/pull/18493))

## 7.0.0-alpha.3 (June 17, 2022)

### Features

- Interactions: Collapse child interactions ([#18484](https://github.com/storybookjs/storybook/pull/18484))

### Bug Fixes

- Interactions: Fix `waitFor` behavior while debugging ([#18460](https://github.com/storybookjs/storybook/pull/18460))
- UI: Fix display skip to sidebar button ([#18479](https://github.com/storybookjs/storybook/pull/18479))

### Maintenance

- CLI: Use `storybook` instead of `sb` ([#18430](https://github.com/storybookjs/storybook/pull/18430))
- Components: Re-bundle the syntax highlighter ([#18425](https://github.com/storybookjs/storybook/pull/18425))

## 7.0.0-alpha.2 (June 15, 2022)

### Features

- UI: Update manager to respect `parameters.docsOnly` in `stories.json` ([#18433](https://github.com/storybookjs/storybook/pull/18433))
- CLI: Add additional files api to sb repro ([#18389](https://github.com/storybookjs/storybook/pull/18389))

### Bug Fixes

- Core: Fix process is not defined when using components ([#18469](https://github.com/storybookjs/storybook/pull/18469))
- Story index: Warn on `storyName` in CSF3 exports ([#18464](https://github.com/storybookjs/storybook/pull/18464))
- Telemetry: Strip out preset from addon name ([#18442](https://github.com/storybookjs/storybook/pull/18442))

### Maintenance

- CLI: Improve to be more async & cleanup ([#18475](https://github.com/storybookjs/storybook/pull/18475))
- 7.0.0 pnp support ([#18461](https://github.com/storybookjs/storybook/pull/18461))
- Build: Use playright version of sb-bench ([#18458](https://github.com/storybookjs/storybook/pull/18458))
- Angular: Support Angular 14 standalone components ([#18272](https://github.com/storybookjs/storybook/pull/18272))
- Build: Fix prebundle script on Windows ([#18365](https://github.com/storybookjs/storybook/pull/18365))
- Scripts: Clean verdaccio cache when running locally ([#18359](https://github.com/storybookjs/storybook/pull/18359))
- Core: fix PnP compatibility for @storybook/ui and @storybook/router packages ([#18412](https://github.com/storybookjs/storybook/pull/18412))

## 7.0.0-alpha.1 (June 7, 2022)

### Bug Fixes

- CLI: Fix `init` to install correct version of sb/storybook ([#18417](https://github.com/storybookjs/storybook/pull/18417))

## 7.0.0-alpha.0 (June 7, 2022)

### Breaking Changes

- Build chain upgrades: TS4, Webpack5, modern ESM, TSUP ([#18205](https://github.com/storybookjs/storybook/pull/18205))
- Create frameworks & rename renderers ([#18201](https://github.com/storybookjs/storybook/pull/18201))
- Core-webpack: Factor out webpack dependencies ([#18114](https://github.com/storybookjs/storybook/pull/18114))
- Core: Remove start-/build-storybook from all frameworks ([#17899](https://github.com/storybookjs/storybook/pull/17899))

### Features

- Core: Add pluggable indexers ([#18355](https://github.com/storybookjs/storybook/pull/18355))
- CLI: Add dev/build commands ([#17898](https://github.com/storybookjs/storybook/pull/17898))
- CLI: Add support for angular/cli v14 ([#18334](https://github.com/storybookjs/storybook/pull/18334))

### Bug Fixes

- Vue/Vue3: Fix decorators in StoryStoreV7 ([#18375](https://github.com/storybookjs/storybook/pull/18375))
- Preview: Default select to `viewMode` story ([#18370](https://github.com/storybookjs/storybook/pull/18370))

### Maintenance

- Core: Split webpack presets out of frameworks ([#18018](https://github.com/storybookjs/storybook/pull/18018))
- Core: Renderer refactor ([#17982](https://github.com/storybookjs/storybook/pull/17982))
- Core: Allow builders to be set in presets ([#18182](https://github.com/storybookjs/storybook/pull/18182))
- Core: Minimize webpack deps ([#18024](https://github.com/storybookjs/storybook/pull/18024))
- Core: Make renderers presets ([#18004](https://github.com/storybookjs/storybook/pull/18004))
- Examples: Simplify sb usage in package.json scripts ([#18065](https://github.com/storybookjs/storybook/pull/18065))

# Older versions

For older versions of the changelog, see [CHANGELOG.v6.md](./CHANGELOG.v6.md), [CHANGELOG.v1-5.md](./CHANGELOG.v1-5.md)
