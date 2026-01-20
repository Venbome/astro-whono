# astro-whono

![CI](https://github.com/cxro/astro-whono/actions/workflows/ci.yml/badge.svg)

一个极简双栏的 Astro 主题起步项目，面向个人写作与轻量内容发布。

## 亮点

- 双栏布局 + 移动端适配
- 内容集合：posts / essay / bits / kids
- RSS 聚合与分栏订阅
- 浅色 / 深色模式 + 阅读模式
- 单一样式入口，排版一致

## 演示

- 在线预览：待补充
- 演示截图：待补充

## 运行环境

- Node.js 18+（建议 20+）

## 快速开始

```bash
npm i
npm run dev
```

其他命令：

```bash
npm run build
npm run preview
npm run check
```

## 内容与路由

内容目录：
- 长文：`src/content/posts/*.md`
- 随笔：`src/content/essay/*.md`
- 小记：`src/content/bits/*.md`
- 孩童：`src/content/kids/index.md`
- 集合定义：`src/content.config.ts`

路由：
- `/` / `/posts/` / `/essay/` / `/bits/` / `/kids/` / `/about/`
- 详情页：`/posts/[...slug]/`、`/essay/[...slug]/`

## Frontmatter（最小约定）

posts / essay：
```yaml
title: My Post
date: 2026-01-01
draft: false
slug: optional
```

bits：
```yaml
date: 2026-01-01T12:00:00+08:00
draft: true
```

`draft: true` 的内容会从列表与 RSS 中过滤。

## 写作/Markdown 扩展（Callout）

- 语法：`:::note[title] ... :::`
- 支持类型：note / tip / info / warning
- 标题写法：仅支持标准 `:::type[title]`（title 可选）
- 未知类型：降级为 note（内容不丢失）
- 不支持参数化（颜色 / 尺寸 / 变体 / 样式开关等）

示例：

```text
:::tip[一个小建议]
这里是正文……
:::
```

## Figure / Caption（推荐写法）

使用标准结构：`figure > (img|picture) + figcaption`。figcaption 可选，不需要说明时不输出。

如需稳定钩子，可加 `figure.figure` 与 `figcaption.figure-caption`；不加也会命中样式。

```html
<figure class="figure">
  <img src="/og.svg" alt="示例图片" />
  <figcaption class="figure-caption">这是一段图片说明。</figcaption>
</figure>
```

## 主题定制入口

- 站点标题 / 页脚年份：`src/layouts/BaseLayout.astro`
- 侧栏导航 / 引言：`src/components/Sidebar.astro`
- 全局样式（含 Markdown 排版）：`src/styles/global.css`
- 代码字体唯一入口：`src/styles/global.css` → `--font-mono`
- 代码高亮主题：`astro.config.mjs` → `markdown.shikiConfig.themes`

## RSS

- `/rss.xml`（聚合）
- `/posts/rss.xml`、`/essay/rss.xml`

⚠️ 发布前请设置 `astro.config.mjs` 的 `site` 为真实域名。

## 脚本

- 生成 bits 草稿：`npm run new:bit`

## 开源与贡献

- License：MIT
- 欢迎提交 PR / Issue（建议先 `npm run check`）

## 第三方资源 / Credits

本项目包含字体 **LXGW WenKai（霞鹜文楷）**（Lite, Regular），作者 LXGW。
许可：**SIL Open Font License 1.1**（见 `public/fonts/OFL.txt` 或 `LICENSES/LXGW-WenKai-OFL-1.1.txt`）。

使用的字体文件：
- `public/fonts/LXGWWenKaiLite-Regular.woff2`

## 致谢

- 感谢 [elizen/elizen-blog](https://github.com/elizen/elizen-blog)，它是最初的设计蓝本
- 进一步追溯，其风格源于 Hugo 主题 [yihui/hugo-ivy](https://github.com/yihui/hugo-ivy)
