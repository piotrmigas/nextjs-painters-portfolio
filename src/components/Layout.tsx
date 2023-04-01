import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className='page-container font-body'>
      <div className='content-wrap'>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:url' content={router.pathname} key='ogurl' />
          <meta property='og:type' content='website' />
          <meta property='og:image' content='/images/works/25.jpg' />
          <meta name='description' content="Emilia Kina's Portfolio" />
          <meta property='og:description' content="Emilia Kina's Portfolio" />
          <meta property='og:title' content={title} key='ogtitle' />
        </Head>
        <Navbar />
        <main className='text-gray-800'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
