import Image from 'next/image';
interface Project {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-12 gap-4 p-4 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:backdrop-blur-md rounded-xl cursor-pointer mb-8"
    >
      <div className="col-span-12 sm:col-span-3 flex flex-col gap-3">
        <span className="text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-200 uppercase transition-colors group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
          {project.date}
        </span>
        <div className="relative overflow-hidden rounded border border-zinc-200 dark:border-zinc-700 transition group-hover:border-zinc-300 dark:group-hover:border-zinc-500 w-32 sm:w-full max-w-[130px] aspect-video">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 640px) 128px, 200px"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>
      </div>

      <div className="col-span-12 sm:col-span-9">
        <h3 className="text-zinc-700 dark:text-zinc-300 font-bold text-lg flex items-center gap-1 transition-colors group-hover:text-zinc-950 dark:group-hover:text-zinc-100">
          {project.title}
          <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </h3>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-0.5 text-[10px] font-medium text-teal-600 bg-teal-100/50 dark:text-teal-300 dark:bg-teal-400/10 rounded-full border border-teal-200/50 dark:border-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function RecommendedPage() {
  const projects: Project[] = [
    {
      date: "2026 — PRESENT",
      title: "享拼購物 | 電商網站",
      description: "本專案使用 Vue 3、Pinia、Element Plus 與 Tailwind CSS 深度還原主流電商的操作流程。涵蓋商品動態導航、多層級購物車邏輯及結帳模組。重點在於處理跨組件的狀態同步，以及優化在大量圖片負載下的首頁 LCP 性能。",
      image: "/images/shopee.png",
      tags: ["Vue 3", "TypeScript", "Tailwind", "Element Plus", "Pinia", "Vercel"],
      link: "https://e-shopping-liart.vercel.app"
    },
    {
      date: "2025 — 2026",
      title: "周邊支付 | 企業形象網站",
      description: "本專案使用 React 19 與 Node.js 的全端 B2B 解決方案。本專案核心在於建構高可靠性的資料處理流程，實作包含 Google reCAPTCHA 驗證、API 冪等性（Idempotency）防重送機制，整合 Cloudinary 的履歷上傳系統。透過 Vitest 與 Playwright 建立自動化測試鏈，並結合 GitHub Actions 實現 Lighthouse 效能監控與 SEO 自動化，完整體現從開發到維運（DevOps）的全流程掌控力。",
      image: "/images/nexa.webp",
      tags: ["React 19", "Node.js", "PostgreSQL", "Prisma", "Supabase","Redux Toolkit", "CI/CD"],
      link: "https://chang-hsi.github.io/idtech-clone/"
    },
    {
      date: "2025 — 2026",
      title: "周邊支付後台 | Content Management System",
      description: "本專案為一套類 Strapi 架構的 B2B 內容管理系統（CMS）。核心採用 React 19 結合 Redux Toolkit 打造高效的三區塊工作區介面，實作包含全站內容治理、多層級權限控管（RBAC）與資安審計日誌。亮點在於整合 SSE（Server-Sent Events）實現即時 Lighthouse 效能監控儀表板，並透過 Schema-driven Validation 與後端共享資料契約，構建出具備高度觀測性與可維護性的全棧管理解決方案。",
      image: "/images/cms.webp",
      tags: ["React 19", "Node.js", "RBAC", "SSE", "Redux Toolkit", "PostgreSQL", "Prisma", "Chart"],
      link: "https://chang-hsi.github.io/idtech-clone-backstage/"
    },
    {
      date: "2025 — 2025",
      title: "雲築智聯 | 企業形象官網",
      description: "本專案為品牌官網的前端架構實踐，聚焦於高擴充性的企業網站需求。實作多語系 (i18n) 切換、多重版型結構 (Layout System) 與動態資料渲染。透過 Vue 3 元件化設計與 Pinia 統一狀態管理，確保品牌資訊與解決方案內容在不同載具下皆能流暢呈現，並針對 SPA 部署進行性能與路由優化。",
      image: "/images/web.webp",
      tags: ["Vue 3", "Vite", "Pinia", "i18n", "Tailwind CSS", "GitHub"],
      link: "https://chang-hsi.github.io/frontend-vue/" 
    }
  ];

  return (
    <section className="mx-auto max-w-3xl py-10 md:py-14">
      <h1 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        作品集
      </h1>
      
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}