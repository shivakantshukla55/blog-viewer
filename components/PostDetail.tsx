import React from "react";
import { Post, Comment } from "../types";

interface PostDetailProps {
  post: Post;
  comments: Comment[];
}

const PostDetail: React.FC<PostDetailProps> = ({ post, comments }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6 text-gray-700">{post.body}</p>
      <h2 className="text-2xl font-semibold mb-3">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border p-4 rounded-lg shadow-sm">
            <p>
              <span className="font-semibold">{comment.name}</span> (
              {comment.email})
            </p>
            <p className="text-gray-600">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
