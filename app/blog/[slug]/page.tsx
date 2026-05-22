import { siteConfig } from '@/lib/site-config';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

// Pre-render blog posts during build for premium optimization and zero errors
export async function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
