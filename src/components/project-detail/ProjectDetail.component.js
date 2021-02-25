import React from "react"
import ReactMarkdown from "react-markdown"
import ReactMarkdownWithHtml from "react-markdown/with-html"
import Button from "../layout/button/Button.component"
import { ProjectTemplate, ProjectStack, StackImg } from "./ProjectDetail.styles"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Title from "../layout/title/Title.component"

const ProjectDetail = ({ project }) => {
  const { title, subtitle, image, content, description, stack } = project

  const markdown = `
  Clics es una red social construida en NodeJS (Express), NextJS (React) y TailwindCSS.

  Here is some JavaScript code:
  # Hello, *world*!

`

  return (
    <ProjectTemplate>
      <SectionCenter>
        <article className="project-content">
          <Title title={title} />
          {/* <h3>{subtitle}</h3> */}

          <ProjectStack>
            {stack.map(item => {
              return <StackImg src={item.image} key={item.id} alt={item.name} />
            })}
          </ProjectStack>

          <ReactMarkdownWithHtml
            children={markdown}
            //allowDangerousHtml={true}
            //escapeHtml={false}
          />
        </article>
        <Button to="/projects">proyectos</Button>
      </SectionCenter>
    </ProjectTemplate>
  )
}

export default ProjectDetail
