import { BLOG_POSTS_BY_SLUG, BLOG_POSTS } from "../../../../lib/blog-content";

/**
 * /blogg/{slug}/md — individual blog post as markdown, for AI crawlers
 * and readers who want the raw content.
 */

export const dynamic = "force-static";

const SITE = "https://elevera.no";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOG_POSTS_BY_SLUG[slug];

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const md = `---
title: ${post.title}
description: ${post.description}
category: ${post.category}
readTime: ${post.readTime}
publishedDate: ${post.publishedDate}
author: ${post.author}
url: ${SITE}/blogg/${post.slug}
---

# ${post.title}

*${post.displayDate} · ${post.category} · ${post.readTime} · ${post.author}*

> ${post.description}

${post.body}

---

Originalartikkel (HTML): ${SITE}/blogg/${post.slug}
Alle innlegg (markdown): ${SITE}/llms-full.txt
`;

  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
