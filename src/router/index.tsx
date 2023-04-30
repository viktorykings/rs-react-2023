import React from 'react';
import { RouteObject } from 'react-router-dom';
import Main from '../pages/Main';
import { About } from '../pages/About';
import FormPage from '../pages/FormPage';
import { NotFound } from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
