import React, { useState } from "react"
import axios from "axios"
import FormInput from "../layout/form-input/FormInput.component"
import FormTextarea from "../layout/form-input/FormTextarea.component"

import {
  ContactSection,
  FormContainer,
  FormGroup,
  ErrorMessage,
  SuccessMessage,
  Spinner,
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
  const [showMessage, setShowMessage] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { name, email, content, subject } = userCredentials

  const handleSubmit = event => {
    event.preventDefault()

    if (name === "" && email === "" && content === "" && subject === "") {
      return setError("Debes completar todos los campos.")
    }

    setError(false)
    setIsLoading(true)

    axios
      .post(
        `${process.env.GATSBY_EMAIL_API_URL}`,
        JSON.stringify(userCredentials)
      )
      .then(response => {
        if (response.data.success) {
          setUserCredentials(initialState)
          setShowMessage(true)
        } else {
          setError("🔥 Se produjo un error, vuelve a intentarlo por favor.")
        }
      })
      .catch(error =>
        setError("🔥 Se produjo un error, vuelve a intentarlo por favor.")
      )
      .finally(() => setIsLoading(false))
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
            <SuccessMessage>
              {showMessage &&
                "💾 Tu mensaje ha sido enviado, muy pronto te responderé."}
            </SuccessMessage>
            <ErrorMessage error>{error}</ErrorMessage>

            <Submit type="submit" isLoading={isLoading}>
              {isLoading ? <Spinner /> : "enviar"}
            </Submit>
          </FormGroup>
        </form>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
