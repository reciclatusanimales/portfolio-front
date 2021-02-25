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
} from "./LatestWorks.styles"

const LatestWorksCopy = ({ projects }) => {
  return (
    <SectionContainer>
      <SectionTitle>
        <Title title="proyectos" />
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
                    {project.stack.map(item => {
                      return (
                        <WorkStackImg
                          src={item.image}
                          key={item.id}
                          alt={item.name}
                        />
                      )
                    })}
                  </WorkStack>
                </WorkFooter>
              </WorkContent>
            </Work>
          )
        })}
      </LatestWorksCenter>

      <Button to={`/projects`}>todos</Button>
    </SectionContainer>
  )
}

export default LatestWorksCopy
