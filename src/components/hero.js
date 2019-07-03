import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Hero = () => (
  <div
    style={{
      position: 'relative',
      zIndex: '-1',
    }}>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "hero-bg.png" }) {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  </div>
)
  

  export default Hero