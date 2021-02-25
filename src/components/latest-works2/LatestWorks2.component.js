import React from "react"
import Title from "../layout/title/Title.component"

import {
  SectionContainer,
  SectionTitle,
  Text,
  Works,
  WorkList,
  WorkLink,
  WorkContent,
  WorkSecondContent,
  WorkTitle,
  WorkFooter,
  WorkStack,
  WorkStackImg,
} from "./LatestWorks2.styles"

const LatestWorks = ({ projects }) => {
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
      <Works>
        {projects.slice(0, 4).map((project, index) => {
          return (
            <WorkList key={index}>
              <WorkLink
                href={project.url}
                className={`work-${index}`}
                target="_blank"
                rel="noreferrer"
              >
                <WorkContent>
                  <WorkTitle>{project.title}</WorkTitle>
                  <WorkFooter>
                    <p>{project.subtitle}</p>
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

                <WorkSecondContent aria-hidden="true">
                  <WorkTitle>{project.title}</WorkTitle>
                  <WorkFooter>
                    <p>{project.subtitle}</p>
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
                </WorkSecondContent>
              </WorkLink>
            </WorkList>
          )
        })}
      </Works>
    </SectionContainer>
  )
}

export default LatestWorks
