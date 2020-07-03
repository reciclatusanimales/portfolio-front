import React from "react"

import Layout from "../components/layout/Layout.component"
import Contact from '../components/contact/Contact.component'

import SEO from "../components/seo"


export default () => {
  
  return (
    <Layout>
      <SEO title="Contact" />

      <Contact />
      
    </Layout>
  )
}