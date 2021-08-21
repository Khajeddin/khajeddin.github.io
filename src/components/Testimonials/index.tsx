import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Testimonial {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Testimonials: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "testimonials section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "testimonials" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const testimonials: Testimonial[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div className="max-w-screen-sm mx-auto w-full px-0 sm:px-16 mb-4">
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title }
            } = item.node;

            return (
              <div className="flex flex-col items-center text-center mt-4" key={id}>
                <figure className="w-16 h-16 mx-auto border border-teal-400 rounded-full">
                  <Img className="border-4 border-white rounded-full" fluid={cover.childImageSharp.fluid} alt={title} />
                </figure>
                <h3 className="font-semibold my-4">{title}</h3>
                <FormatHtml content={html} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
