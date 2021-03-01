import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../layout/button/Button.component"
import {
  ProjectContainer,
  ProjectTitle,
  ProjectContent,
  ProjectDescription,
  ProjectBtnContainer,
  ProjectImgContainer,
  ProjectImg,
} from "./Project.styles"

const Project = ({
  pk,
  description,
  title,
  subtitle,
  github,
  stack,
  url,
  image,
  imageName,
  index,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const imageFluid = data.allFile.edges.find(
    ({ node }) => node.relativePath === imageName
  )

  return (
    <ProjectContainer>
      <ProjectTitle to={`/projects/${pk}`} key={pk}>
        {title}
      </ProjectTitle>
      <ProjectImgContainer>
        {imageFluid && (
          <ProjectImg
            fluid={imageFluid.node.childImageSharp.fluid}
            alt="Image"
          />
        )}
      </ProjectImgContainer>
      <ProjectContent>
        <ProjectDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laborum suscipit doloremque, expedita voluptatum maiores corporis modi
          assumenda esse consectetur error nulla, vero alias.
        </ProjectDescription>
        <ProjectBtnContainer>
          <Button to={`/projects/${pk}`}>Detalles</Button>
        </ProjectBtnContainer>
      </ProjectContent>
    </ProjectContainer>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
