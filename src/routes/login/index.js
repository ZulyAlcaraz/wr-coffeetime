import React from 'react';
import Login from './login';

export default {
  path: '/',
  async action() {
    return {
      title: 'login',
      component: <Login />,
    };
  }
};
