import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostSpeaker from '../components/post-speaker';
import PostSponsor from '../components/post-sponsor';

export default function Template({
  data,
}) {
  const { markdownRemark } = data;
  const {
    fields, frontmatter, html,
  } = markdownRemark;

  return (
    <Layout>
      <div className="post-container">
        <div className="post">
          <h1>{frontmatter.title}</h1>
          <h2>{fields.date}</h2>
          <PostSpeaker
            speaker={frontmatter.speaker}
          />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <PostSponsor
            sponsor={frontmatter.sponsor}
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
          facebook
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
          directions
          note
        }
        after {
          name
          url
          location
          directions
          note
        }
      }
    }
  }
`;
