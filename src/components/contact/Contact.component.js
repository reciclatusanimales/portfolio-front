import React, { useState } from "react"

import FormInput from "../layout/form-input/FormInput.component"
import FormTextarea from "../layout/form-input/FormTextarea.component"

import {
  ContactSection,
  FormContainer,
  FormGroup,
  Submit,
} from "./Contact.styles"
import Title from "../layout/title/Title.component"

const initialState = {
  name: "",
  email: "",
  subject: "",
  content: "",
}

const Contact = () => {
  const [userCredentials, setUserCredentials] = useState(initialState)

  const { name, email, content, subject } = userCredentials

  const handleSubmit = event => {
    event.preventDefault()

    fetch(`${process.env.GATSBY_EMAIL_API_URL}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
    })
      .then(response => response.json())
      .then(function (data) {
        if (data.success) {
          console.log("OK")
          setUserCredentials(initialState)
          // TODO: success message
        } else {
          console.log("NOTOK")
          // TODO: success message
        }
      })
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <ContactSection>
      <Title title="Contacto" />

      <FormContainer>
        <form onSubmit={handleSubmit} noValidate>
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
            <FormInput
              name="subject"
              type="text"
              handleChange={handleChange}
              value={subject}
              label="asunto"
              required
            />
            <FormTextarea
              name="content"
              handleChange={handleChange}
              rows="5"
              value={content}
              label="mensaje"
              required
            />
          </FormGroup>
          <FormGroup>
            <Submit type="submit">enviar</Submit>
          </FormGroup>
        </form>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
