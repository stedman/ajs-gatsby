import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ExternalLink from '../components/external-link';
import PostLink from '../components/post-link';
import FontAwesomeScript from '../components/fontawesome-script';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // Make sure there's a date field and that file isn't 'draft'.
    .filter((edge) => !!edge.node.fields.date && edge.node.fields.postTypes[1] !== 'draft')
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <FontAwesomeScript />
      <SEO title="Home" />
      <div className="columns is-variable is-8-desktop">
        <div className="column is-two-thirds">
          <div className="content is-medium">
            <h1>Austin JavaScript</h1>
            <p>We are a community-driven group that meets to discuss JavaScript and the open web.</p>

            <div className="section">
              <ExternalLink href="https://twitter.com/AustinJS">
                <span className="icon is-large">
                  <i className="fab fa-twitter fa-3x" />
                </span>
              </ExternalLink>
              \ <br /> {' '} <em className="is-family-code"><small>please retweet</small></em>
            </div>

            <p>We work hard to build a community that treats people with excellence. We've formalized this in the <Link to="/code-of-conduct/">Austin JavaScript Code of Conduct</Link>.</p>
          </div>
        </div>
        <div className="column">
          <div className="content has-offset-top-3">
            <h3>Recent activity</h3>
            <ul>
              {Posts}
            </ul>
            <p><Link to="/post/">More...</Link></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___slug] }, limit: 5) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            date(formatString: "MMM DD, YYYY")
            dateShort:date
            postTypes
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
