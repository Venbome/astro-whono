---
title: Markdown 排版完全指南
description: 展示所有 Markdown 格式效果，包括标题、列表、代码、表格、引用等
date: 2026-01-15
tags: ["指南", "Markdown", "排版"]
draft: false
---

这篇文章展示了本主题支持的所有 Markdown 排版效果。

## 文本格式

这是一段普通文本。**这是粗体文字**，*这是斜体文字*，***这是粗斜体***。你也可以使用 ~~删除线~~ 来标记废弃内容。

行内代码使用反引号包裹：`const hello = 'world'`，非常适合标记变量名或命令。

## 引用

> 设计的价值不止于建造完成。好的设计应该能够经受时间的考验，在岁月流转中依然保持其独特的魅力与实用性。

你也可以使用多段引用：

> 第一段引用内容。
>
> 第二段引用内容，展示多段落效果。

## 提示块（Callout）

使用 HTML 结构插入提示块（支持 note / tip / info / warning 四种类型）。标题内加入 `<span class="callout-icon">` 作为图标钩子；如需隐藏图标，可给该 `span` 添加 `data-icon="none"`：

<div class="callout note">
  <p class="callout-title"><span class="callout-icon" aria-hidden="true"></span>Note</p>
  <p>这是补充说明或旁白内容，适合放一些背景或注释。</p>
</div>

<div class="callout tip">
  <p class="callout-title"><span class="callout-icon" aria-hidden="true"></span>Tip</p>
  <p>这里是小技巧或更优做法，强调“建议”。</p>
</div>

<div class="callout info">
  <p class="callout-title"><span class="callout-icon" aria-hidden="true"></span>Info</p>
  <p>信息提示块，用于补充说明或背景事实。</p>
</div>

<div class="callout warning">
  <p class="callout-title"><span class="callout-icon" aria-hidden="true"></span>Warning</p>
  <p>警告/注意事项，提醒潜在风险或限制。</p>
</div>

### 语法糖测试集（Callout）

以下仅展示语法（不含样式），用于语法糖测试用例（待实现）：

### 语法糖渲染示例

:::tip[一个小建议]
这里是正文……
:::

~~~text
:::note
只有正文，无标题。
:::
~~~

~~~text
:::note[标题]
这是有标题的 note。
:::
~~~

~~~text
:::tip[清单]
- 条目一
- 条目二
:::
~~~

~~~text
:::info[代码]
```ts
const hello = 'world';
```
:::
~~~

~~~text
:::warning[注意]
> 这是一段引用提示。
> 也可以包含一个 [链接](https://astro.build)。
:::
~~~

~~~text
:::foo[错误类型]
非法类型示例。
:::
~~~

非法类型建议处理：降级为 note（保留标题与内容）。

## 列表

### 无序列表

- 第一项
- 第二项
  - 嵌套项 A
  - 嵌套项 B
- 第三项

### 有序列表

1. 准备工作
2. 安装依赖
3. 运行项目
   1. 开发模式
   2. 生产构建

### 任务列表

- [x] 完成设计稿
- [x] 开发首页
- [ ] 编写文档
- [ ] 发布上线

## 代码块

### JavaScript

```javascript
// 一个简单的 Astro 组件示例
const greeting = 'Hello, World!';

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Python

```python
def quick_sort(arr):
    """快速排序算法实现"""
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# 使用示例
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(numbers))
```

### CSS

```css
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}
```

### Shell

```bash
# 安装依赖并启动开发服务器
npm install
npm run dev

# 构建生产版本
npm run build
```

## 表格

| 功能 | 状态 | 说明 |
|------|:----:|------|
| 响应式布局 | ✅ | 完美适配移动端 |
| 暗色模式 | 🚧 | 开发中 |
| RSS 订阅 | ✅ | 支持多 Feed |
| 国际化 | ❌ | 计划中 |

## 链接与图片

这是一个 [外部链接](https://astro.build)，会在新标签页打开。

### Figure / Caption

**案例 A：img + figcaption**

<figure class="figure">
  <img src="/og.svg" alt="默认分享图示例" />
  <figcaption class="figure-caption">图注示例：这是图片的说明文字。</figcaption>
</figure>

**案例 B：无 figcaption（不应留空白）**

<figure class="figure">
  <img src="/og.svg" alt="无图注示例" />
</figure>

**案例 C：picture + figcaption（可选）**

<figure class="figure">
  <picture>
    <source srcset="/og.svg" type="image/svg+xml" />
    <img src="/og.svg" alt="picture 图像示例" />
  </picture>
  <figcaption class="figure-caption">图注示例：picture 的说明文字。</figcaption>
</figure>

## 分割线

上方是一些内容。

---

下方是另一些内容。

## 数学与特殊字符

常用数学符号：π ≈ 3.14159，e ≈ 2.71828

特殊字符：© 2026 · ™ · ® · € · £ · ¥ · → · ← · ↑ · ↓

## 英文段落

> The best way to predict the future is to invent it. — Alan Kay

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## 混合排版

这是一段包含 **粗体**、*斜体*、`代码` 和 [链接](/) 的混合排版文本。你可以在一个段落中自由组合这些元素，创造丰富的阅读体验。

---

以上就是本主题支持的所有 Markdown 格式。如果你发现任何渲染问题，欢迎提交 Issue！
