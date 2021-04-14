import React, { useReducer } from 'react';

import FormField from './components/FormField';
import FormBtn from './components/FormBtn';
import { PropsFormUser } from './types';

const initialState = {
  email: '',
  password: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case '':
      break;

    default:
      return initialState;
  }
};

const FormUser: React.FC<PropsFormUser> = ({ typeForm }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {};

  return (
    <form className="flex flex-col w-full mt-4" onSubmit={handleSubmit}>
      <FormField name="email" textLabel="Correo" value={state.password} />
      <FormField name="password" textLabel="Contraseña" value={state.email} />
      <FormBtn />
    </form>
  );
};

export default FormUser;
