# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project aims to follow Semantic Versioning.

## [Unreleased]
### Added
- 引入 callout 语法糖解析管线：`remark-directive` + `remark-callout`
- 新增 `src/plugins/remark-callout.mjs`，将 `:::type[title]` 转换为 callout DOM 协议
- 新增 Figure/Caption 最薄样式支持（`src/styles/components/figure.css`），并由 `global.css` 聚合
- 新增 GitHub Actions 轻量 CI：build + check:callout（含 check:figure 可选）
- 新增本地聚合命令 `npm run ci`（build + check:callout + check:figure）

### Changed
- Astro Markdown 管线接入 callout 语法糖插件（`remarkPlugins` 顺序：directive → callout）
- Markdown 指南新增语法糖渲染示例与标准语法测试集
- 文档补充 callout 语法与降级规则（README / DECISIONS / AI-GUIDE）
- README 明确 callout 语法边界（仅标准标题写法，禁止参数化）
- 增加最小回归检查脚本 `npm run check:callout`
- Markdown 指南新增 Figure/Caption 示例（img/picture + 可选 figcaption）
- README 增加 Figure/Caption 推荐写法说明
- figcaption 使用文楷字体并限定在 `.prose` 范围
- 补充 `picture > img` 响应式约束，避免图片溢出
- docs/changelog 重命名为 docs/change_archives
- 统一代码字体入口为 `--font-mono`（`global.css`），`prose` 只负责排版表现

### Fixed
- 修复暗色模式下纯文本代码块（无 token span）文字不可读的问题

## Pre-release（未发布历史）

### Added
- 新增最薄 `Callout.astro` 组件，统一输出 callout 结构与属性

### Changed
- callout 图标渲染改为 `.callout-title::before`，支持 `data-icon` 覆盖与 `data-icon="none"`
- callout 样式迁移到 `src/styles/components/callout.css`，`global.css` 使用 `@import` 聚合

### Added
- 增加 `@astrojs/check` 与 `typescript` 依赖以支持 `astro check`
- **夜间模式**：支持浅色/深色主题切换
  - 使用 `data-theme="dark"` 属性切换
  - 自动跟随系统偏好，支持手动切换
  - 切换按钮位于侧栏底部，带无障碍支持（`aria-pressed`、`aria-label`）
  - Shiki 代码高亮双主题（`github-light` / `github-dark`）
- 侧栏底部新增阅读模式与 RSS 按钮（黑白图标、悬停提示），阅读模式全站入口，文章/Kids 页支持沉浸阅读与退出按钮
- Kids 页面 TOC 区域折叠指示器（三角形图标，展开/折叠时旋转）
- Initial Astro theme scaffold with fixed sidebar + content layout.
- Routes: `/`, `/posts/`, `/essay/`, `/bits/`, `/kids/`, `/about/`.
- Content Collections: `posts`, `essay`, `bits`, `kids`.
- Bits draft generator: `npm run new:bit`.
- RSS endpoints: `/rss.xml`, `/posts/rss.xml`, `/essay/rss.xml`.

### Changed
- callout 样式改为极简竖线形态，移除背景/边框/标题分隔线
- callout 图标改为 `.callout-icon` 钩子，CSS mask 提供 SVG；tip 使用 Lucide sparkles 并设为低饱和绿
- 更新 Markdown 指南中的 callout 示例结构
- 正文图片统一最大宽度为 75% 并居中显示（`.prose img`）
- kids 示例内容替换为可开源保留的原创示例
- 配色调整为暖色调（Stone 色系）
- TOC 区域行间距增加（`gap: 14px`，一级标题间距 `20px`）
- 引用和代码块背景色改用 CSS 变量，适配夜间模式
- 引用样式优化：去除斜体，调整内边距
- 深色模式下 badge 与 bits 搜索按钮配色更统一，提升可读性
- 统一列表页标题结构，新增 `.page-header` 组件（主标题+副标题单行显示）
- 调整背景色为 `#fffefc`（米白色）
- 侧栏标题 hover 效果移除颜色变化，只保留放大
- 导航链接 hover 效果改为向左平移

### Fixed
- 修复 `astro check` 类型检查错误（隐式 `any`、DOM 类型收窄、kids TOC 类型推断）
- 修正文档指引路径（AI-GUIDE 指向 docs）
- 修复引用内 `<p>` 标签默认 margin 导致的高度问题
- 修复深色模式代码块背景未切换、日间高亮被覆盖的问题

### Removed
- 清理未使用的 CSS 样式（`.bits-hero`、`.kids-subtitle`）
