import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { fetchPages } from '../../utils/api';

type Page = {
  id: number;
  title: { rendered: string };
};

export default function Pages({ pages }: { pages: Page[] }) {
  return (
    <div className="container mt-4">
      <h2>Pages</h2>
      <ul className="list-group">
        {pages.map((page) => (
          <li key={page.id} className="list-group-item">
            <Link href={`/pages-list/${page.id}`}>{page.title.rendered}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pages = await fetchPages();
  return { props: { pages } };
};
