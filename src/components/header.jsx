import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <div className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item has-text-white is-size-1">
              {siteTitle}
            </Link>
          </div>
          <div className="navbar-menu is-size-4">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/post/" className="navbar-item">
                Archive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
