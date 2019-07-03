import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Image from "../components/image"

import Img from "gatsby-image"

const PageTwo = () => (
  <Layout>
    <Hero />
    <div
      style={{
        textAlign: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div>
        <SEO title="page 2" />
        <p style={{ color: "#506EDC", fontWeight: "bold" }}>This is page 2.</p>
        <Link to="/" style={{ color: "grey" }}>
          Go back to the homepage
        </Link>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            paddingLeft: "20px",
            width: "100%",
          }}
        >
          <Image />
        </div>
      </div>
    </div>
  </Layout>
)

export default PageTwo
