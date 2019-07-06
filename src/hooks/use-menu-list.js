// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useMenuList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MenuList {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              fields {
                categorySlug
                slug
              }
              frontmatter {
                date
                description
                category
                title
              }
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark;
};

export default useMenuList;
