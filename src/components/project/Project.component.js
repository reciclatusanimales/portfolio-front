import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../layout/button/Button.component"
import {
  Container,
  TitleContainer,
  Title,
  Content,
  Description,
  BtnContainer,
  ImgContainer,
  Img,
  IconsContainer,
  OpenIcon,
} from "./Project.styles"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

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
    <Container>
      <TitleContainer>
        <Title to={`/projects/${pk}`} key={pk}>
          {title}
        </Title>
        <IconsContainer>
          <OpenIcon href={github} target="_blank">
            <FaGithub />
          </OpenIcon>
          <OpenIcon href={url} target="_blank">
            <FaExternalLinkAlt />
          </OpenIcon>
        </IconsContainer>
      </TitleContainer>

      <ImgContainer>
        {imageFluid && (
          <Img fluid={imageFluid.node.childImageSharp.fluid} alt="Image" />
        )}
      </ImgContainer>
      <Content>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          laborum suscipit doloremque, expedita voluptatum maiores corporis modi
          assumenda esse consectetur error nulla, vero alias.
        </Description>
        <BtnContainer>
          <Button to={`/projects/${pk}`}>Detalles</Button>
        </BtnContainer>
      </Content>
    </Container>
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
