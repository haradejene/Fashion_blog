"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Footer from "../components/Footer";

type Post = {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
};

const getData = async (): Promise<Post[]> => {
  const res = await fetch("/fashion_articles.json");
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default function Article() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getData().then(setPosts).catch(console.error);
  }, []);

  return (
    <>
    <head><title>Articles</title></head>
<nav className="flex justify-between items-center px-6 py-4">
  <h1 className="text-4xl font-light">FASHIONOVA</h1>

  <div className="flex gap-6">
    <Link href={"/"}>Blog</Link>
    <Link href={"/article"}>Article</Link>
    <Link href="/suggestions">Suggestions</Link>
  </div>
</nav>
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Fashion Articles</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-6 bg-white shadow rounded"
>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              By <strong>{post.author}</strong> on {post.date}
            </p>
            <p className="mb-2 text-gray-700">{post.summary}</p>
            <p className="mb-2 text-gray-800">{post.content}</p>
            <p className="text-sm italic text-gray-500">Tags: {post.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </main>
     <Footer /> 
    </>
  );
}