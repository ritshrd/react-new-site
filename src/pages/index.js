import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
    
      <div className="HeroGroup">
    
      <h1>Hi people</h1>
    <p>Welcome to your new Gatsby sites.</p>
    <p>Now go build something great.</p>
    
    <Link to="/video">Watch the video</Link>

    <Link to="/page-2/">Go to page 2</Link>

      </div>
    
     </div>

  </Layout>
)

export default IndexPage
