import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to WordPress Blog Viewer</h1>
      <p>Select a section below to view content from WordPress API:</p>
      <ul className="list-group">
        <li className="list-group-item">
          <Link href="/posts">View Blog Posts</Link>
        </li>
        <li className="list-group-item">
          <Link href="/pages-list">View Pages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
