/* eslint-disable react/prop-types */
import React from 'react';
import PostLink from '../components/post-link';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
      <SEO title="Archive" />
      <div className="content">
        <h1>Archive</h1>
        <ul>
          {Posts}
        </ul>
      </div>
    </Layout>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___slug] }) {
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
