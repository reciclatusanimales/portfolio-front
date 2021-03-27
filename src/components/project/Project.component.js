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
  id,
  description,
  title,
  subtitle,
  summary,
  github,
  stack,
  url,
  image,
  imageUrl,
  thumbnail,
  thumbnailUrl,
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
    ({ node }) => node.relativePath === image
  )

  return (
    <Container>
      <TitleContainer>
        <Title to={`/projects/${id}`} key={id}>
          {title}
        </Title>
        <IconsContainer>
          {github && (
            <OpenIcon href={github} target="_blank">
              <FaGithub />
            </OpenIcon>
          )}
          {url && (
            <OpenIcon href={url} target="_blank">
              <FaExternalLinkAlt />
            </OpenIcon>
          )}
        </IconsContainer>
      </TitleContainer>

      <ImgContainer>
        {imageFluid && (
          <Img fluid={imageFluid.node.childImageSharp.fluid} alt="Image" />
        )}
      </ImgContainer>
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <BtnContainer>
          <Button to={`/projects/${id}`}>Detalles</Button>
        </BtnContainer>
      </Content>
    </Container>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
