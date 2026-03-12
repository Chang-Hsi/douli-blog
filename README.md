# Douli Blog

個人技術部落格專案，使用 `content/posts/*.mdx` 作為內容來源，文章會自動出現在首頁、文章列表與文章詳情頁。

## 目前已落地功能

- Next.js App Router 網站架構
- MDX 文章系統（Frontmatter 解析、依日期排序、`draft` 過濾）
- 動態文章路由 `/posts/[slug]`（透過 `generateStaticParams` 預渲染）
- 主要頁面：`/`、`/posts`、`/posts/[slug]`、`/about`、`/tags`、`/recommended`
- 深色模式切換（`next-themes`）
- 程式碼區塊語法高亮（`rehype-pretty-code`，主題 `one-dark-pro`）
- `showLineNumbers` 行號顯示支援
- 已可部署至 Vercel（Preview）

## 技術棧

- Next.js `16.1.6`
- React `19`
- TypeScript
- Tailwind CSS `v4`
- next-mdx-remote + gray-matter
- rehype-pretty-code
- Radix UI primitives（Navigation Menu / Slot / Separator）

## 專案結構

```text
content/posts/          # MDX 文章
src/app/                # App Router 路由
src/lib/posts.ts        # 文章讀取、Frontmatter 解析、MDX 編譯
src/components/         # 共用 UI 與版型元件
```

## 本機開發

```bash
npm install
npm run dev
```

## 文章格式

Frontmatter 欄位：

```md
---
title: "文章標題"
date: "2026-03-11"
description: "文章描述"
tags: ["React", "MDX"]
slug: "your-slug"
draft: false
---
```

程式碼區塊（可選行號）：

````md
```tsx showLineNumbers
const [count, setCount] = useState(0)
```
````

## 部署

Preview Deploy：

```bash
vercel deploy -y
```

Production Deploy：

```bash
vercel deploy --prod -y
```

## 目前未納入（避免誤解）

- 自動產生 sitemap / RSS / robots.txt
- 完整 i18n 多語系路由架構
- GitHub Pages 靜態輸出流程

## 專案基本介紹（格式版）

個人獨立開發的技術部落格系統，專注於從零構建一套可維護的內容發佈流程。專案採用 Next.js App Router 架構，使用基於檔案系統（File-system based）的 MDX 內容來源，並著重開發者體驗（DX）與實際部署可行性。

Next.js 16 (App Router) / TypeScript / Tailwind CSS / MDX

內容解析系統設計：以 `content/posts` 為核心，自研 Markdown / MDX 讀取函式，解析 Frontmatter 欄位並實作文章排序與 Draft 過濾機制。

動態路由與架構：採用多層級路由（首頁、文章列表、文章詳情、About、Tags、Recommended），並透過 `generateStaticParams` 完成文章頁的 SSG 預渲染。

技術寫作增強功能：整合 `rehype-pretty-code` 程式碼語法高亮，支援 `showLineNumbers` 行號顯示，優化技術文章閱讀體驗。

SEO 與內容分發：目前已配置網站基礎 Metadata；Sitemap、RSS 與 robots.txt 仍在後續規劃中，尚未納入現行版本。

介面與多國語系 (i18n)：已實作深淺色模式切換（Dark Mode）；目前以中文內容為主，尚未導入完整多語系路由架構。

CI/CD 與部署流程：專案已串接 GitHub 與 Vercel，支援 Preview / Production 部署；GitHub Pages 靜態部署流程目前未納入。
