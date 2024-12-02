import { GetStaticPaths, GetStaticProps } from "next";
import PostDetail from "../../components/PostDetail";
import { fetchPostById, fetchComments, fetchPosts } from "../../utils/api";
import { Post, Comment } from "../../types";

interface PostPageProps {
  post: Post;
  comments: Comment[];
}

const PostPage: React.FC<PostPageProps> = ({ post, comments }) => {
  return <PostDetail post={post} comments={comments} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPosts();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);
  const post = await fetchPostById(id);
  const comments = await fetchComments(id);

  return { props: { post, comments } };
};

export default PostPage;
