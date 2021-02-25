import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"

import SEO from "../components/seo"
import Button from "../components/layout/button/Button.component"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found">
      <div>
        <div className="not-found-error" title="404">
          404
        </div>

        <h2>La página que buscas no existe.</h2>
        <p>
          {`Cómo has llegado aquí es todo un misterio.... Pincha para volver a tierra firme.`}
          <Button to="/">Volver</Button>
        </p>
      </div>
    </div>
  </Layout>
)
export default NotFoundPage
