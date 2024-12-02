import React from "react";
import Link from "next/link";
import { Post } from "../types";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/post/${post.id}`} legacyBehavior>
              <a className="text-lg font-semibold text-blue-600 hover:underline">
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
