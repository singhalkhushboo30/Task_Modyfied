import { GetServerSideProps } from 'next';
import { fetchPage } from '../../utils/api';

type Page = {
  title: { rendered: string };
  content: { rendered: string };
};

export default function PageDetail({ page }: { page: Page }) {
  return (
    <div className="container mt-4">
      <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = await fetchPage(context.params?.id as string);
  return { props: { page } };
};
