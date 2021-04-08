import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout/Layout.component"

import SEO from "../components/seo"
import useScroll from "../hooks/useScroll"
import Scroll from "../components/layout/scroll/Scroll.component"
import {
  SectionCenter,
  ProjectsContainer,
} from "../components/layout/layout/Layout.styles"
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
} from "../components/layout/scroll/Scroll.styles"
import Project from "../components/project/Project.component"
import Title from "../components/layout/title/Title.component"

const ProjectsPage = ({
  data: {
    api: { allProjects: projects },
  },
}) => {
  const scroll = useScroll()

  return (
    <Layout>
      <SEO title="Proyectos" />

      <ProjectsContainer>
        <Scroll scroll={scroll}>
          <FadeIn>
            <Title title="Proyectos" />
          </FadeIn>
        </Scroll>

        <SectionCenter>
          {projects.map((project, index) => {
            const projectComp = <Project index={index} {...project} />
            return (
              <Scroll key={project.id} scroll={scroll}>
                {index % 2 === 0 ? (
                  <FadeInLeft children={projectComp} />
                ) : (
                  <FadeInRight children={projectComp} />
                )}
              </Scroll>
            )
          })}
        </SectionCenter>
      </ProjectsContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    api {
      allProjects {
        github
        id
        content
        description
        summary
        title
        featured
        url
        image
        imageUrl
        thumbnail
        thumbnailUrl
        stack {
          id
          slug
          featured
          name
          image
        }
      }
    }
  }
`

export default ProjectsPage
