import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import LogoImage from './logo-image';

const Header = ({ siteTitle }) => (
  <header className="hero is-primary">
    <div className="hero-body is-paddingless">
      <div className="container">
        <div className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <figure className="image is-96x96">
              <LogoImage />
            </figure>
            <Link to="/" className="navbar-item title has-text-white is-size-1-tablet">
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
