import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { ReactNode } from 'react'
;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}