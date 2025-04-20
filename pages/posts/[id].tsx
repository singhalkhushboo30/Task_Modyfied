import { GetServerSideProps } from 'next';
import { fetchPost } from '../../utils/api';

type Post = {
  title: { rendered: string };
  content: { rendered: string };
};

export default function PostDetail({ post }: { post: Post }) {
  return (
    <div className="container mt-4">
      <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const post = await fetchPost(context.params?.id as string);
  return { props: { post } };
};
