import React from "react"

import Title from "../layout/title/Title.component"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Project from "../project/Project.component"

import { ProjectsContainer } from "./Projects.styles"
import Button from "../layout/button/Button.component"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsContainer className="scroll-container">
      <Title title="Proyectos" className="fade-in-auto" />
      <SectionCenter>
        {projects.map((project, index) => {
          return (
            <Project
              key={project.id}
              index={index}
              {...project}
              className={`${
                index === 0
                  ? "slide-in-left-auto"
                  : index % 2 === 0
                  ? "scroll-element js-scroll slide-left"
                  : "scroll-element js-scroll slide-right"
              }`}
            />
          )
        })}
      </SectionCenter>
      {showLink && <Button to="/projects">proyectos</Button>}
    </ProjectsContainer>
  )
}

export default Projects
