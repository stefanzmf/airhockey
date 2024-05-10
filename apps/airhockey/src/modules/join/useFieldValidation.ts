import { useCallback } from 'react';

import {FieldsName} from './utils'

const generators = {
  isRequired: (value: string) => value === '',
  isOutsideLengthRange: (minLen: number, maxLen: number, value: string) => value.length < minLen || value.length > maxLen,
  isEmail: (value: string) => !value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  hasInvalidCharacters: (value: string) => !value.match(/^[a-zA-Z]+$/),
}

const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 10;

type FieldValidation = (value: string) => Partial<Record<keyof typeof generators, boolean>>

const rules: Record<FieldsName, FieldValidation> = {
  [FieldsName.USERNAME]: (value: string) => ({
    isRequired: generators.isRequired(value),
    hasInvalidCharacters: generators.hasInvalidCharacters(value),
    isOutsideLengthRange: generators.isOutsideLengthRange(MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH, value),
  }),

  [FieldsName.EMAIL]: (value) => ({
    isRequired: generators.isRequired(value),
    isEmail: generators.isEmail(value),
  })
}

export const messages: Record<keyof typeof generators, string> = {
  isEmail: 'Email is invalid',
  isRequired: 'Field is required',
  isOutsideLengthRange: `Length is invalid. It must have between ${MIN_USERNAME_LENGTH} and ${MAX_USERNAME_LENGTH} characters`,
  hasInvalidCharacters: 'Only a-z A-Z characters are valid'
}

export const useFormValidation = () => {
  const validateField = useCallback((fieldName: FieldsName, value: string) => {
    if (!rules[fieldName]) return [];
    const fieldRules = rules[fieldName];
    const errors = fieldRules(value);

    const keys = Object.keys(errors) as (keyof typeof generators)[]

    return keys.filter((key) => errors[key])
  }, [])

  return [validateField] as const;
}
