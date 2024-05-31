export enum FieldsName {
  'USERNAME'= 'username',
  'EMAIL'= 'email',
}

export type UserResponseData = false | {
  id: string;
  createdAt: string;
  email: string;
  username: string;
}
