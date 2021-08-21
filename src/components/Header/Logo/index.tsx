import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';


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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: IGatsbyImageData = placeholderImage.childImageSharp.gatsbyImageData;

  return (
    <Link className="flex items-center mr-auto text-indigo-900 hover:text-indigo-900" to="/">
      <figure className="w-16 h-16 mr-3 border border-green-200 rounded-full">
        <GatsbyImage className="border-4 border-white rounded-full" image={logoImage} alt={logoTitle} />
      </figure>
      <h1 className="text-lg">{logoTitle}</h1>
    </Link>
  );
};

export default Logo;
