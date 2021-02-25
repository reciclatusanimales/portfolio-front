import React, { useState } from "react"

import FormInput from "../layout/form-input/FormInput.component"
import FormTextarea from "../layout/form-input/FormTextarea.component"

import Button from "../layout/button/Button.component"

import {
  ContactSection,
  FormContainer,
  FormGroup,
  Submit,
} from "./Contact.styles"
import Title from "../layout/title/Title.component"

const Contact = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <ContactSection>
      <Title title="contacto" />

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              name="name"
              type="name"
              handleChange={handleChange}
              value={name}
              label="nombre"
              required
            />
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              value={email}
              label="email"
              required
            />
            <FormTextarea
              name="message"
              handleChange={handleChange}
              rows="5"
              value={message}
              label="mensaje"
              required
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">enviar</Button>
          </FormGroup>
        </form>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
