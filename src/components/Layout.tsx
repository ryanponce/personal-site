import React, { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout: FC<{}> = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export { Layout };
