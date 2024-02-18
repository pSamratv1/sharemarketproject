import Link from 'next/link';
import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the home page.</p>

      {/* Example of internal navigation using Link */}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
