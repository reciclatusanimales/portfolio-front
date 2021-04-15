import React from "react"
import ReactMarkdown from "react-markdown"
import Button from "../layout/button/Button.component"
import {
  ProjectImg,
  ProjectTemplate,
  ProjectStack,
  StackImg,
  TerminalWindow,
  TerminalIcons,
  TerminalTitle,
  TerminalFoot,
} from "./ProjectDetail.styles"
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
          <TerminalWindow>
            <TerminalIcons>
              <span></span>
            </TerminalIcons>
            <TerminalTitle>root@reciclatusanimales.com: ~</TerminalTitle>
          </TerminalWindow>
          <SyntaxHighlighter
            language={language}
            style={monokaiSublime}
            children={value}
          />
          <TerminalFoot />
        </>
      )
    },
    image: props => {
      return <ProjectImg {...props} alt="Code" />
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
