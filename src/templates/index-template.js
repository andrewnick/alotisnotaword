// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark
};

const IndexTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      {edges && <Post post={edges[0].node} />}
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!) {
    allMarkdownRemark(limit: $postsLimit, filter: { frontmatter: { homepage: { eq: true } } }) {
      edges {
        node {
          id
          html
          fields {
            slug
            tagSlugs
          }
          frontmatter {
            date
            description
            tags
            title
            heading
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
