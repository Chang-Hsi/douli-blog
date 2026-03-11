import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl py-10 md:py-20">
      {/* 標題對齊文章列表風格 */}
      <h1 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        關於我
      </h1>

      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-y-0 lg:gap-x-16">
        
        {/* 左側：文章內容區 (佔 7 欄) */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              原本是補教老師，2023 年 9 月開始轉去做前端，最開始對軟體什麼的一竅不通。
              只是對能用代碼將畫面生出來這件事特別感興趣。
            </p>
            <p>
              然而沒想到在這行一做就做了兩年多。
            </p>
            <p>
              在生活上是個選擇困難症患者，面前如果有很多選擇，反而往往不知道要選哪一個。
              超級喜歡去日本，屬於每年都要往日本跑一趟的那種。             
            </p>
            <p>
              最近覺得寫文章有點意思，想弄個部落格記錄一下自己的生活與工作經驗，希望用它紀錄我的一路成長。
            </p>
            <p>
              喜歡把生活中胡思亂想的事情寫成文章，梳理腦中雜亂的信息，總想把資訊分門歸類，
              就像寫 code 時要習慣把組件獨立出來一樣。
            </p>
            <p>
              最近時間比較空，沒有開發的時程壓力在後面像鬼一樣追，終於有時間弄一個部落格，
              記錄一下生活的胡思亂想，順便把作品集放進來展示一下。
            </p>

            <p>
              如果你對我怎麼學程式以及相關背景有興趣，可以閱讀：
              <Link
                href="/posts/shareme"
                className="ml-1 inline-flex items-center gap-1 text-blue-600 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                前端工程師是怎麼煉成的
                <FiExternalLink aria-hidden="true" className="size-3.5" />
              </Link>
            </p>
          </div>
        </div>

        {/* 右側：個人資訊側欄 (佔 5 欄) */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="lg:sticky lg:top-20">
            {/* 頭像容器 */}
            <div className="relative aspect-square w-18 sm:w-24 lg:w-32 max-w-sm rotate-3 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 shadow-xl">
              <Image
                src="/images/hello.jpg"
                alt="My Portrait"
                fill
                sizes="(max-width: 1024px) 156px, 200px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* 社交連結或簡短資訊 */}
            <div className="mt-10 space-y-4">
              <span className="text-sm uppercase tracking-widest text-zinc-400">
                盲目的努力家，常常想要努力卻找不到方向，興趣是找到事情做。最近在學習前端新框架跟後端資料庫時，突然喜歡上了寫文章。
              </span>
              <ul className="space-y-3 mt-4">
                <li className="flex">
                  <Link href="https://github.com/Chang-Hsi" className="group flex text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition">
                    Follow on GitHub
                  </Link>
                </li>
                <li className="flex">
                  <Link href="https://www.facebook.com/" className="group flex text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition">
                    Follow on Facebook
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
