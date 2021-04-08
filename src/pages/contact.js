import React from "react"

import Layout from "../components/layout/layout/Layout.component"
import Contact from "../components/contact/Contact.component"

import SEO from "../components/seo"
import Scroll from "../components/layout/scroll/Scroll.component"
import useScroll from "../hooks/useScroll"

export default () => {
  const scroll = useScroll()

  return (
    <Layout>
      <SEO title="Contacto" />

      <Scroll scroll={scroll}>
        <Contact />
      </Scroll>
    </Layout>
  )
}
