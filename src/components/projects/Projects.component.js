import React from "react"
import { Link } from "gatsby"

import Title from "../layout/title/Title.component"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Project from "../project/Project.component"

import { ProjectsContainer } from "./Projects.styles"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsContainer>
      <Title title="Proyectos" />
      <SectionCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </SectionCenter>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          proyectos
        </Link>
      )}
    </ProjectsContainer>
  )
}

export default Projects
