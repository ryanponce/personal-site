import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />

    <div>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Ryan Ponce</footer>
    </div>
  </>
);

export default Layout;
