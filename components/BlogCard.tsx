"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

interface BlogCardProps {
  post: BlogPost;
  isDarkBackground?: boolean;
}

export default function BlogCard({ post, isDarkBackground = false }: BlogCardProps) {
  if (!post) {
    return (
      <Card className="p-4 bg-red-50 border-red-200">
        <CardContent>
          <p className="text-red-600">loading..............</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`
        overflow-hidden
        ${isDarkBackground ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}
        rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
      `}
    >
      {post.imageUrl && post.imageUrl.length > 0 && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title || 'Blog post image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-4">
        <CardTitle className="text-xl font-semibold mb-4">
          {post.title || 'Untitled Post'}
        </CardTitle>

        <CardContent className="p-0 mb-4">
          <p className="text-sm">
            {post.description || 'No description available'}
          </p>
        </CardContent>

        <div className="space-y-4">
          <p className={`text-sm ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
            Published: {post.date ? new Date(post.date).toLocaleDateString() : 'Date not available'}
          </p>

          <Link 
            href={`/posts/${post.id}`}
            className={`
              block w-full py-2 text-center text-white
              ${isDarkBackground 
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-600 hover:bg-blue-700'
              }
              rounded-md transition-colors duration-200
            `}
          >
            Read More
          </Link>
        </div>
      </div>
    </Card>
  );
}