import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BizCard from '../components/biz-card';
import MeetupDetails from '../components/meetup-details';
import PostSponsor from '../components/post-sponsor';
import SEO from '../components/seo';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { fields, frontmatter, html } = markdownRemark;

  if (fields.postTypes[0] === 'meetup') {
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
          <div className="column has-offset-top-3">
            <BizCard
              person={frontmatter.speaker}
            />
          </div>
        </div>
        <div className="section">
          <PostSponsor
            sponsor={frontmatter.sponsor}
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
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
        speaker {
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
          name
          url
          careerUrl
        }
        venue {
          name
          url
          location
          notes
        }
        after {
          name
          url
          location
          notes
        }
      }
    }
  }
`;
