import React, { Fragment } from 'react';

import { useInputValue } from '../../hooks/useInputValue';
import { Form, Button, Input, Title } from './styles';

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={onsubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  );
};
