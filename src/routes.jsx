import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from './root';
import Errorpage from './Errorpage';
import home from './home';
import About from './allApps';
import allApps from './allApps';
import appDetails from './appDetails';
import installedApp from './installedApp';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
        {
            index: true,
            loader:() => fetch('app.json'),
            path: '/',
            Component: home
        },
        {
          loader:() => fetch('all-apps.json'),
          path: '/apps',
          Component: allApps
        },
        {
          loader:() => fetch('./all-apps.json'),
          path: '/appDetails/:id',
          Component: appDetails
        },
         {
          loader:() => fetch('./all-apps.json'),
          path: '/installedApp',
          Component: installedApp
         }
    ]
  },
]);

