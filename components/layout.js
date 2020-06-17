import React from "react";
import Head from "next/head";
import Link from 'next/link'

const Navbar = () => (
  <nav className="blue darken-4">
    <div className="container nav-wrapper">
      <Link href="/">
        <a className="brand-logo">Next Live</a>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  </nav>
);

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next Live App</title>
      <link rel="icon" href="/favicon.ico" />
      {/* Compiled and minified CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      ></link>
    </Head>
    <Navbar />
    <div className="container">{children}</div>
    {/* Compiled and minified JavaScript */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </>
);

export default Layout;
