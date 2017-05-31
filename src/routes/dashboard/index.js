
import React from 'react';
import Dashboard from './dashboard';
import Tab1 from './tab1/tab1';
import Tab2 from './tab2/tab2';

export default {

  path: '/dashboard',

  children: [
    {
      path: '/',
      async action(context) {
        return {
          title: 'Tab1',
          component:<Dashboard context={context}>
            <Tab1 />
          </Dashboard>
        };
      },
    },
    {
      path: '/tab2',
      async action(context) {
        return {
          title: 'Tab2',
          component: <Dashboard context={context}>
            <Tab2 />
          </Dashboard>,
        };
      },
    }
  ]
};
