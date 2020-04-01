/* eslint-disable react/prop-types */
import React from 'react';
import PostLink from '../components/post-link';
import Layout from '../components/layout';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // You can filter your posts based on some criteria
    .filter((edge) => !!edge.node.fields.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <div className="blog-archive">
        <h1>Archive</h1>
        <ol>{Posts}</ol>
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
