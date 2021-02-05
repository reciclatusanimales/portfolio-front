import React from "react"
import PropTypes from "prop-types"
import { ProjectContainer, ProjectImg, ProjectInfo, ProjectNumber, ProjectTitle, ProjectDescription, ProjectStack, StackImg, ProjectGithub, ProjectSquare } from './Project.styles'

const Project = ({ pk, description, title, subtitle, github, stack, url, image, index }) => {

  return (
    <ProjectContainer>
      {image && (
        <ProjectImg src={image} className="project-img" alt="project" />
        // <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <ProjectInfo>
        <ProjectNumber>0{index + 1}.</ProjectNumber>
        <ProjectTitle to={`/projects/${pk}`} key={pk}>{title || "default title"}</ProjectTitle>
        <ProjectDescription dangerouslySetInnerHTML={{__html: description}} ></ProjectDescription>
        <ProjectStack>
          {stack.map(item => {
            return <StackImg src={item.image} key={item.id} alt={item.name} />
          })}
        </ProjectStack>
        <div className="project-links">
          <a href={github}>
            <ProjectGithub className="project-icon" />
          </a>
          <a href={url}>
            <ProjectSquare className="project-icon" />
          </a>
        </div>
      </ProjectInfo>
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
