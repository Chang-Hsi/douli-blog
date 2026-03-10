type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-4 text-3xl font-bold">文章：{params.slug}</h1>
      <p className="text-gray-600">
        這裡之後會渲染 MDX 文章內容。
      </p>
    </section>
  );
}