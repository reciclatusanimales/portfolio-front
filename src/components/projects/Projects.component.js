import React from "react"
import { Link } from "gatsby"

import Title from "../title/Title.component"
import Project from "../project/Project.component"

import { ProjectsContainer, SectionCenter } from "./Projects.styles"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsContainer>
      <Title title={title} />
      <SectionCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </SectionCenter>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </ProjectsContainer>
  )
}

export default Projects
  