import React from "react"
import ReactMarkdown from "react-markdown"
import Button from "../layout/button/Button.component"
import { ProjectTemplate, ProjectStack, StackImg } from "./ProjectDetail.styles"
import { SectionCenter } from "../layout/layout/Layout.styles"
import Title from "../layout/title/Title.component"
import SyntaxHighlighter from "react-syntax-highlighter"
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs"

const ProjectDetail = ({ project }) => {
  const { title, stack, content } = project

  const renderers = {
    code: ({ language, value }) => {
      return (
        <>
          <div className="terminal-window">
            <div className="terminal-icons">
              <span></span>
            </div>
            <div className="terminal-title">root@reciclatusanimales.com: ~</div>
          </div>
          <SyntaxHighlighter
            language={language}
            style={monokaiSublime}
            children={value}
          />
          <div className="terminal-foot"></div>
        </>
      )
    },
    image: props => {
      return (
        <img
          {...props}
          style={{ maxWidth: "650px", minWidth: "280px", width: "100%" }}
          alt="Code"
        />
      )
    },
  }

  return (
    <ProjectTemplate>
      <SectionCenter>
        <article>
          <Title title={title} />

          <ProjectStack>
            {stack.map(item => {
              return <StackImg src={item.image} key={item.id} alt={item.name} />
            })}
          </ProjectStack>

          <ReactMarkdown
            renderers={renderers}
            children={content}
            allowDangerousHtml={true}
            escapeHtml={false}
          />
        </article>
        <Button to="/projects" aria-label="Proyectos">
          proyectos
        </Button>
      </SectionCenter>
    </ProjectTemplate>
  )
}

export default ProjectDetail
