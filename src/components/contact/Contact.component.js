import React, { useState } from "react"

import FormInput from '../form-input/FormInput.component'
import FormTextarea from '../form-input/FormTextarea.component'

import { ContactSection, FormContainer, FormGroup, Submit } from './Contact.styles'

const Contact = () => {

    const [ userCredentials, setUserCredentials ] = useState({ 
        name: '',
        email: '', 
        message: '' 
    });

    const { name, email, message } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();    

    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

      
    return (
        <ContactSection>
            <FormContainer>
                <h3>get in touch</h3>

                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormInput
                            name='name'
                            type='name'
                            handleChange={handleChange}
                            value={name}
                            label='name'
                            required
                        />
                        <FormInput
                            name='email'
                            type='email'
                            handleChange={handleChange}
                            value={email}
                            label='email'
                            required
                        />
                        <FormTextarea
                            name="message"
                            handleChange={handleChange}
                            rows="5"
                            value={message}
                            label='message'
                            required
                        />
                    </FormGroup>
                    <Submit type="submit" className="submit-btn btn">
                        submit here
                    </Submit>
                </form>
            </FormContainer>
        </ContactSection>
    )
}

export default Contact