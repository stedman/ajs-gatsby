import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BizCard from '../components/biz-card';
import MeetupDetails from '../components/meetup-details';
import PostSponsor from '../components/post-sponsor';

export default function Template({ data }) {
  const { markdownRemark, allMarkdownRemark } = data;
  const { fields, frontmatter, html } = markdownRemark;
  const { edges } = allMarkdownRemark;

  if (fields.postTypes[0] === 'meetup') {
    const Speakers = frontmatter.speakers.map((speaker) => (
      <div className="has-offset-top">
        <BizCard person={speaker} />
      </div>
    ));

    const pagination = edges
      .filter((edge) => edge.node.fields.slug === fields.slug)
      .reduce((acc, edge) => {
        const previous = edge.previous
          ? {
            slug: edge.previous.fields.slug,
            title: edge.previous.frontmatter.title,
          }
          : null;
        const next = edge.next
          ? {
            slug: edge.next.fields.slug,
            title: edge.next.frontmatter.title,
          }
          : null;

        return {
          previous,
          next,
        };
      }, {});

    return (
      <Layout>
        <SEO
          title={`Meetup: ${frontmatter.title} (${fields.dateShort})`}
        />
        <div className="columns is-desktop is-variable is-8-desktop">
          <div className="column is-two-thirds">
            <h1 className="title">{frontmatter.title}</h1>
            <div
              className="content is-medium"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <MeetupDetails
              frontmatter={frontmatter}
              fields={fields}
            />
          </div>
          <div className="column has-offset-top">
            <h2 className="title is-sr-only">Speaker</h2>
            {Speakers}
          </div>
        </div>
        <div className="section">
          <PostSponsor
            sponsor={frontmatter.sponsor}
          />
        </div>

        <div className="columns is-variable is-8">
          <div className="column">
            {pagination.previous
              && (
                <Link to={pagination.previous.slug}>
                  ← {pagination.previous.title}
                </Link>
              )}
          </div>
          <div className="column has-text-right">
            {pagination.next
              && (
                <Link to={pagination.next.slug}>
                  {pagination.next.title} →
                </Link>
              )}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <FontAwesomeScript />
      <SEO title={frontmatter.title} />
      <div className="columns">
        <div className="column is-two-thirds">
          <h1 className="title">{frontmatter.title}</h1>
          <div
            className="content is-large"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      id
      html
      fields {
        date(formatString: "MMMM DD, YYYY")
        dateShort:date
        postTypes
        slug
      }
      frontmatter {
        title
        speakers {
          name
          title
          bio
          picUrl
          url
          linkedin
          twitter
          github
        }
        sponsor {
          key
          hiring
        }
        venue {
          key
        }
        after {
          key
        }
      }
    }
    allMarkdownRemark(filter: {fields: {slug: {glob: "/post/meetup/20**/**"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
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
