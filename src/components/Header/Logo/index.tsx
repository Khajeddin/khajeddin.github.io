import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';


import { ImageSharpFluid } from 'helpers/definitions';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  return (
    <Link className="flex items-center mr-auto text-indigo-900 hover:text-indigo-900" to="/">
      <figure className="w-16 h-16 mr-3 border border-teal-400 rounded-full">
        <Img className="border-4 border-white rounded-full" fluid={logoImage} alt={logoTitle} />
      </figure>
      <h1 className="text-lg">{logoTitle}</h1>
    </Link>
  );
};

export default Logo;
