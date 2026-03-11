import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const prettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: true,
  onVisitLine(node: { children: Array<{ type: string; value?: string }> }) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
};

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  draft?: boolean;
};

export type PostMeta = PostFrontmatter & {
  excerpt: string;
};

function stripMarkdown(content: string) {
  const inlineCodes: string[] = [];

  const protectedContent = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, (_, code) => {
      const token = `INLINECODETOKEN${inlineCodes.length}XYZ`;
      inlineCodes.push(code);
      return token;
    });

  const cleaned = protectedContent
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^>\s?/gm, '')
    .replace(/[#*_~-]/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned.replace(/INLINECODETOKEN(\d+)XYZ/g, (_, index) => {
    return inlineCodes[Number(index)] ?? '';
  });
}

function createExcerpt(content: string, length = 220) {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((p) => stripMarkdown(p).replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const excerpt = paragraphs.slice(0, 2).join('\n\n');

  if (excerpt.length <= length) {
    return excerpt;
  }

  return `${excerpt.slice(0, length).trim()}...`;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        ...(data as PostFrontmatter),
        excerpt: createExcerpt(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getAllPostSlugs(): string[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return data.slug as string;
    })
    .filter(Boolean);
}

export async function getPostBySlug(slug: string) {
  const filenames = fs.readdirSync(postsDirectory);

  const targetFilename = filenames.find((filename) => {
    if (!filename.endsWith('.mdx')) return false;

    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return data.slug === slug;
  });

  if (!targetFilename) {
    return null;
  }

  const filePath = path.join(postsDirectory, targetFilename);
  const source = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  return {
    frontmatter,
    content,
  };
}
