import React from "react"
import Markdown from "react-markdown"

import Button from "../layout/button/Button.component"
import { ProjectTemplate, ProjectStack, StackImg } from "./ProjectDetail.styles"

const ProjectDetail = ({ project }) => {
  const { title, subtitle, image, content, description, stack } = project
  const markdown = `
    # Header 1
    ## Header 2
  
    _ italic _
  
    ** bold **
  
    <b> bold Html </b>
    `
  return (
    <ProjectTemplate>
      <div className="section-center">
        <article className="project-content">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>

          <ProjectStack>
            {stack.map(item => {
              return <StackImg src={item.image} key={item.id} alt={item.name} />
            })}
          </ProjectStack>

          <Markdown source={content} />
        </article>
        <Button to="/projects">proyectos</Button>
      </div>
    </ProjectTemplate>
  )
}

export default ProjectDetail
