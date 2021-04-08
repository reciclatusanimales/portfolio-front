import React from "react"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Button from "../layout/button/Button.component"
import MainTitle from "../layout/title/Title.component"
import {
  SectionContainer,
  SectionTitle,
  Text,
  ContainerCenter,
  Work,
  TitleContainer,
  Title,
  IconsContainer,
  OpenIcon,
  Img,
  Content,
  Subtitle,
  Summary,
  Footer,
  Stack,
  StackTag,
} from "./LatestWorks.styles"

const LatestWorksCopy = ({ projects }) => {
  return (
    <SectionContainer className="scroll-container">
      <SectionTitle className="scroll-element js-scroll fade-in">
        <MainTitle title="Proyectos" />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed
          reiciendis quis provident vero cum accusamus illum perferendis
          debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus
          officia temporibus inventore a.
        </Text>
      </SectionTitle>
      <ContainerCenter>
        {projects.slice(0, 4).map((project, index) => {
          return (
            <Work
              key={index}
              href={project.url}
              className={`work-${index + 1} scroll-element js-scroll slide-${
                index % 2 === 0 ? "left" : "right"
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <Img src={project.imageUrl} />
              <Content>
                <TitleContainer>
                  <Title to={`/projects/${project.id}`}>{project.title}</Title>
                  <IconsContainer>
                    <OpenIcon href={project.github} target="_blank">
                      <FaGithub />
                    </OpenIcon>
                    <OpenIcon href={project.url} target="_blank">
                      <FaExternalLinkAlt />
                    </OpenIcon>
                  </IconsContainer>
                </TitleContainer>

                <Summary
                  dangerouslySetInnerHTML={{ __html: project.summary }}
                />
                <Subtitle>{project.subtitle}</Subtitle>

                <Footer>
                  <Stack>
                    {project.stack
                      .filter(stack => stack.featured)
                      .slice(0, 6)
                      .map(stack => {
                        return (
                          <StackTag key={stack.slug}>{stack.name}</StackTag>
                        )
                      })}
                  </Stack>
                </Footer>
              </Content>
            </Work>
          )
        })}
      </ContainerCenter>

      <Button className="scroll-element js-scroll fade-in" to={`/projects`}>
        ver todos
      </Button>
    </SectionContainer>
  )
}

export default LatestWorksCopy
