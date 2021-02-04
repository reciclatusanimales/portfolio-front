import React from 'react';

import {
  GroupContainer,
  FormTextareaContainer,
  FormInputLabel
} from './FormInput.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormTextareaContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;