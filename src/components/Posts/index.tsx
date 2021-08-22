import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle } from 'helpers/definitions';

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div className="w-full flex flex-wrap">
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags }
          } = item.node;

          return (
            <div className="w-full sm:w-1/2 p-3" key={id}>
              <Link to={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <div className="w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300">
                    <figure className="w-full">
                      <GatsbyImage image={cover.childImageSharp.gatsbyImageData} alt={title} />
                    </figure>
                    <div className="p-4 text-indigo-900">
                      <h3 className="text-xs text-indigo-500">{date}</h3>
                      <h3 className="font-semibold mb-4">{title}</h3>
                      <p>{description}</p>
                    </div>
                    <div className="p-4 pt-2 mt-auto">
                      {tags.map((item) => (
                        <span className="text-xs text-indigo-900 border border-green-200 rounded-full px-2 py-1 mr-2" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Posts;
