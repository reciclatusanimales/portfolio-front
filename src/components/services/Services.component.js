import React from "react"
import services from "../../utils/services"
import { Underline } from "../layout/layout/Layout.styles"
import { ServicesSection, ServicesCenter, Service } from "./Services.styles"

const Services = () => {
  return (
    <ServicesSection>
      <ServicesCenter>
        {services.map(service => {
          const { id, icon, title, text } = service

          return (
            <Service key={id}>
              {icon}
              <h4>{title}</h4>
              <Underline />
              <p>{text}</p>
            </Service>
          )
        })}
      </ServicesCenter>
    </ServicesSection>
  )
}

export default Services
