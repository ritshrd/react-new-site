import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image';
import SEO from '../components/seo';
import Card from '../components/card';
import Section from '../components/Section';
import Wave from '../components/Wave';




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

    <div className="Logos">
      <img src={require('../images/logo-sketch.png')} width="50"/>
      <img src={require('../images/logo-react.png')} width="50"/>
      <img src={require('../images/logo-figma.png')} width="50"/>
      <img src={require('../images/logo-swift.png')} width="50"/>
      <img src={require('../images/logo-studio.png')} width="50"/>

    </div>

    <Wave />
      </div>
    
     </div>
<div className="Cards">
  <h2>11 courses, more comming</h2>
  <div className="CardGroup">
    <Card 
      title="DesignSystem"
      text="10 sections"
      image={require('../images/wallpaper.jpg')} />
    <Card 
      title="React for Designers"
      text="11 sections"
      image={require('../images/wallpaper2.jpg')} />
    <Card 
      title="Sound Design"
      text="5 sections"
      image={require('../images/wallpaper3.jpg')} />
    <Card 
      title="ARKit 2"
      text="10 sections"
      image={require('../images/wallpaper4.jpg')} />
    <Card 
      title="ARKit 2"
      text="10 sections"
      image={require('../images/wallpaper4.jpg')} />
    <Card 
      title="ARKit 2"
      text="10 sections"
      image={require('../images/wallpaper4.jpg')} />
    <Card 
      title="ARKit 2"
      text="10 sections"
      image={require('../images/wallpaper4.jpg')} />
    <Card 
      title="ARKit 2"
      text="10 sections"
      image={require('../images/wallpaper4.jpg')} />

</div>
</div>
<Wave /> 
<Section


  image={require('../images/wallpaper2.jpg')}
  logo={require('../images/logo-react.png')}
  title="React for Designers"
  text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." 


  />

  </Layout>
)

export default IndexPage
