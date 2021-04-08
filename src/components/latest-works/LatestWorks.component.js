import React from "react"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Button from "../layout/button/Button.component"
import {
  FadeIn,
  FadeInBottom,
  FadeInLeft,
  FadeInRight,
} from "../layout/scroll/Scroll.styles"
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
    <SectionContainer>
      <FadeIn>
        <SectionTitle>
          <MainTitle title="Proyectos" />
          <Text>
            Estos son algunos proyectos en los que he estado trabajando
            recientemente.
          </Text>
        </SectionTitle>
      </FadeIn>
      <ContainerCenter>
        {projects.slice(0, 4).map((project, index) => {
          const projectComp = (
            <Work href={project.url} target="_blank" rel="noreferrer">
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
          return index % 2 === 0 ? (
            <FadeInLeft
              key={index}
              className={`work-${index + 1}`}
              children={projectComp}
            />
          ) : (
            <FadeInRight
              key={index}
              className={`work-${index + 1}`}
              children={projectComp}
            />
          )
        })}
      </ContainerCenter>

      <FadeInBottom>
        <Button to={`/projects`}>ver todos</Button>
      </FadeInBottom>
    </SectionContainer>
  )
}

export default LatestWorksCopy
