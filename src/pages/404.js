import React from "react"
import Layout from "../components/layout/layout/Layout.component"
import SEO from "../components/seo"
import Button from "../components/layout/button/Button.component"
import {
  NotFound,
  NotFoundError,
} from "../components/layout/layout/Layout.styles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound>
      <div>
        <NotFoundError title="404">404</NotFoundError>

        <h2>La página que buscas no existe.</h2>
        <p>
          {`Cómo has llegado aquí es todo un misterio.... Pincha para volver a tierra firme.`}
          <Button to="/" aria-label="Volver">
            Volver
          </Button>
        </p>
      </div>
    </NotFound>
  </Layout>
)
export default NotFoundPage
