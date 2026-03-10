## 開發規劃

### 階段一：專案初始化
1. 建立 Next.js App Router 專案
2. 建立 `content/posts` 文章目錄
3. 先做全站骨架 -> 做各路由 placeholder page -> 建立首頁、`/about`、`/posts/[slug]` 路由
4. 設定 static export（靜態輸出）
5. 建立一篇測試文章，確認文章頁可正常顯示

### 階段二：文章系統
1. 建立 Markdown / MDX 文章讀取機制
2. 定義 frontmatter 欄位格式（title、date、tags、description、slug 等）
3. 實作文章列表頁
4. 實作文章詳細頁
5. 加入文章排序與 draft 過濾功能

### 階段三：部落格核心功能
1. 建立 tag 分類頁面
2. 加入文章目錄（TOC）
3. 加入程式碼區塊高亮
4. 顯示閱讀時間與文章資訊
5. 補上 404 頁面與基本導覽體驗

### 階段四：SEO 與輸出優化
1. 設定每篇文章的 Metadata
2. 建立 sitemap
3. 建立 RSS
4. 設定 robots.txt
5. 檢查 static export 輸出結果與路由相容性

### 階段五：UI 與部署
1. 調整整體版型與排版風格
2. 加入深色模式
3. 補齊 favicon、OG image 等網站素材
4. 部署到 Vercel
5. 規劃 GitHub Pages 部署相容設定