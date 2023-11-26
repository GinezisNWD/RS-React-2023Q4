import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search } from './Search';
import Pagination from './Pagination';

interface MainContainerProps {
  children: React.ReactNode;
  title: string;
}

export function MainContainer({ children, title }: MainContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="navbar">
        <Link className="link" href={'/'}>
          Главная
        </Link>
        <Link className="link" href={'/products'}>
          Продукты
        </Link>
      </div>
      <style>
        {`
        .navbar {
          background: orange;
          padding: 15px;
          color: white;
        }
        .link {
          text-decoration: none;
          color: white;
          font-size: 20px;
          margin:10px;
        }
        `}
      </style>

      <Search />
      <Pagination />

      <div>{children}</div>
    </>
  );
}
