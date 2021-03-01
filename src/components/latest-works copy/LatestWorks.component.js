import Image from "gatsby-image"
import React from "react"

import Button from "../layout/button/Button.component"
import Title from "../layout/title/Title.component"
import {
  LatestWorksCenter,
  Work,
  SectionContainer,
  SectionTitle,
  Text,
  WorkContent,
  WorkTitle,
  WorkDescription,
  WorkFooter,
  WorkStack,
  WorkStackImg,
  WorkStackTag,
} from "./LatestWorks.styles"
import logo from "../../assets/clics_small.jpg"

const LatestWorksCopy = ({ projects }) => {
  return (
    <SectionContainer>
      <SectionTitle>
        <Title title="Proyectos" />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed
          reiciendis quis provident vero cum accusamus illum perferendis
          debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus
          officia temporibus inventore a.
        </Text>
      </SectionTitle>
      <LatestWorksCenter>
        {projects.slice(0, 4).map((project, index) => {
          return (
            <Work
              key={index}
              href={project.url}
              className={`work-${index + 1}`}
              target="_blank"
              rel="noreferrer"
            >
              <WorkContent>
                <WorkTitle to={`/projects/${project.pk}`}>
                  {project.title}
                </WorkTitle>
                <WorkDescription>{project.subtitle}</WorkDescription>

                <WorkFooter>
                  <WorkStack>
                    {project.stack.slice(0, 6).map(item => {
                      return <WorkStackTag>{item.name}</WorkStackTag>
                    })}
                  </WorkStack>
                </WorkFooter>
              </WorkContent>
            </Work>
          )
        })}
      </LatestWorksCenter>

      <Button to={`/projects`}>ver todos</Button>
    </SectionContainer>
  )
}

export default LatestWorksCopy
