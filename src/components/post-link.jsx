import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ post }) => (
  <li>
    <Link to={post.fields.slug}>
      {post.fields.dateShort}
      {': '}
      <span className="has-text-weight-semibold">{post.frontmatter.title}</span>
      {'  '}
      <em>({post.fields.postTypes[0]})</em>
    </Link>
  </li>
);
export default PostLink;
