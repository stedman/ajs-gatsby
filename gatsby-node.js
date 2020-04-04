/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  // Create type definitions for optional frontmatter fields.
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      speakers: [Speaker]
      sponsor: Sponsor
      venue: Venue
      after: After
    }
    type Speaker {
      name: String!
      title: String
      bio: String
      picUrl: String
      url: String
      linkedin: String
      twitter: String
      github: String
    }
    type Sponsor {
      key: String
      hiring: Boolean
    }
    type Venue {
      key: String
    }
    type After {
      key: String
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    // We'd like to take the good parts from Jekyll posts (https://jekyllrb.com/docs/posts/#creating-posts).
    // Date is extracted from the src filename and frontmatter categories are joined to build paths.
    //
    // const { categories } = node.frontmatter;
    //
    // Let's do something a bit different — let's assume all Markdown content is a post.
    // Then rely on file name for date and the subcategory. Format: YYYY-MM-DD-SUBCATEGORY.
    // The final path will have the format: /posts/SUBCATEGORY/YYYY/MM/DD/
    const categories = ['post'];

    const filename = createFilePath({ node, getNode, basePath: 'posts' });

    // Extract the date and postType from the file name.
    const reParseFileName = /^\/(\d{4}-\d{2}-\d{2})-(.+)\/$/;
    const matched = filename.match(reParseFileName);
    if (!matched) throw Error('Invalid file name pattern.');
    const [, date, postType] = matched;

    // Save the date for later use.
    createNodeField({ node, name: 'date', value: date });

    // Create a file path slug from categories + postType + date.
    const slug = `/${categories.concat([postType, date]).join('-').replace(/-/g, '/')}/`;
    createNodeField({ node, name: 'slug', value: slug });

    // Save postType for the heck of it.
    createNodeField({ node, name: 'postTypes', value: postType.split('-') });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.jsx');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: fileAbsolutePath }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
