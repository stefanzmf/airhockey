import React, { useCallback, useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';

import {FieldsName} from './utils'
import {useFormValidation, messages} from './useFieldValidation'

const Join = () => {
  const [formValues, setFormValues] = useState<{
    [FieldsName.USERNAME]: string,
    [FieldsName.EMAIL]: string,
  }>({
    username: '',
    email: '',
  });

  const [fieldsErrors, setFieldsErrors] = useState<{
    [FieldsName.USERNAME]: undefined | string,
    [FieldsName.EMAIL]: undefined | string,
  }>({
    username: undefined,
    email: undefined
  });

  const [validateField] = useFormValidation()

  const handleOnFieldBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = event.target.name as FieldsName;
    const fieldValue = event.target.value;

    const errors = validateField(fieldName, fieldValue)

    const error = errors[0];
    const message = messages[error];

    setFieldsErrors((prev) => ({
      ...prev,
      [fieldName]: message,
    }))
  }, [])

  const handleOnFieldChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;

    setFormValues((prev) => ({
      ...prev,
      [fieldName]: event.target.value,
    }))
  }, [])

  return (
    <form name="join">
      <Stack spacing={3}>
        <TextField
          required
          error={!!fieldsErrors[FieldsName.USERNAME]}
          helperText={fieldsErrors[FieldsName.USERNAME]}
          onChange={handleOnFieldChange}
          onBlur={handleOnFieldBlur}
          value={formValues.username}
          variant="standard"
          size="small"
          label="Username"
          name={FieldsName.USERNAME}
        />

        <TextField
          required
          error={!!fieldsErrors[FieldsName.EMAIL]}
          helperText={fieldsErrors[FieldsName.EMAIL]}
          onChange={handleOnFieldChange}
          onBlur={handleOnFieldBlur}
          value={formValues.email}
          variant="standard"
          size="small"
          label="E-Mail"
          name={FieldsName.EMAIL}
        />

        <Button variant="contained">Join</Button>
      </Stack>
    </form>
  )
}

export default Join
