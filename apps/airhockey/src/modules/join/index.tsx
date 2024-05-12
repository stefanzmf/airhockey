import React, { useCallback, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

import { FieldsName } from './utils'
import { messages, useFormValidation } from './useFieldValidation'
import { useUserMutation } from './queries';

const Join = () => {
  const userMutation = useUserMutation()
  const [formValues, setFormValues] = useState<{
    [FieldsName.USERNAME]: string,
    [FieldsName.EMAIL]: string,
  }>({
    [FieldsName.USERNAME]: '',
    [FieldsName.EMAIL]: '',
  });

  const [fieldsErrors, setFieldsErrors] = useState<{
    [FieldsName.USERNAME]: undefined | string,
    [FieldsName.EMAIL]: undefined | string,
  }>({
    [FieldsName.USERNAME]: undefined,
    [FieldsName.EMAIL]: undefined
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

  const handleFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    userMutation.mutate({
      username: formValues[FieldsName.USERNAME],
      email: formValues[FieldsName.EMAIL],
    })
  }, [formValues[FieldsName.USERNAME], formValues[FieldsName.EMAIL]])

  const hasErrors = Object.values(fieldsErrors).filter((err) => err).length !== 0

  return (
    <form name="join" onSubmit={handleFormSubmit}>
      <Stack spacing={3}>
        <TextField
          required
          autoFocus
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

        <Button
          type="submit"
          variant="contained"
          disabled={hasErrors || userMutation.isPending}
        >
          Join
        </Button>
      </Stack>
    </form>
  )
}

export default Join
