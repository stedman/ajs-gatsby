/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Header from './header';
import './layout-bulma.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="section">
        <div className="container">
          <div className="">
            {children}
          </div>
        </div>
      </main>
      <footer className="footer has-background-white has-border-top-medium has-offset-top">
        <div className="container">
          <div className="navbar">
            <div className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item">
                  Austin JavaScript © {new Date().getFullYear()}
                </div>
                <Link to="/about/" className="navbar-item">
                  About
                </Link>
                <Link to="/code-of-conduct/" className="navbar-item">
                  Code of Conduct
                </Link>
                <Link to="/contributing/" className="navbar-item">
                  Contributing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
