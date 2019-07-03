import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Spinner from "../components/spinner"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Image from "../components/image"

import Img from "gatsby-image"

const IndexPage = () => (
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
        <Spinner />
        <SEO title="Home" />
        <h1 style={{ marginTop: "80px" }}>Your jamstack site is ready.</h1>
        <p style={{ color: "#506EDC", fontWeight: "bold" }}>
          Welcome to your new Gatsby site. Now go build something great.
        </p>
        <Link to="page-2" style={{ color: "grey" }}>
          Go to page 2
        </Link>
        <div
          style={{
            width: "100%",
            display: "flex",
            textAlign: "center",
            paddingLeft: "200px",
          }}
        >
          <Image />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
