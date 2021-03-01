import React from "react"

import Title from "../layout/title/Title.component"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Project from "../project/Project.component"

import { ProjectsContainer } from "./Projects.styles"
import Button from "../layout/button/Button.component"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsContainer>
      <Title title="Proyectos" />
      <SectionCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </SectionCenter>
      {showLink && <Button to="/projects">proyectos</Button>}
    </ProjectsContainer>
  )
}

export default Projects
