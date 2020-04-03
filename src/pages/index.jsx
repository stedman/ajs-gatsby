import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <h1>Hi people</h1>
      <p>Welcome to Austin JavaScript.</p>
      {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
      <p><Link to="/post/">Go to Archive</Link></p>
    </div>
  </Layout>
);

export default IndexPage;
