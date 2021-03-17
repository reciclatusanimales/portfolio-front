import React from "react"
import services from "../../utils/services"
import { Underline } from "../layout/layout/Layout.styles"
import {
  ServicesSection,
  ServicesCenter,
  Service,
  Stack,
  StackImg,
} from "./Services.styles"

const Services = ({ stacks }) => {
  return (
    <ServicesSection>
      <ServicesCenter>
        {services.map(service => {
          const { id, icon, title } = service

          return (
            <Service key={id}>
              {icon}
              <h4>{title}</h4>
              <Underline />
              <Stack>
                {stacks
                  .filter(stack => stack.category === id)
                  .map(stack => (
                    <StackImg
                      src={stack.image}
                      key={stack.slug}
                      alt={stack.name}
                    />
                  ))}
              </Stack>
            </Service>
          )
        })}
      </ServicesCenter>
    </ServicesSection>
  )
}

export default Services
