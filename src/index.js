import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material'

import { store } from './store/store';
import Index from './routes/Index/Index';
import Root from './routes/Root/Root';
import ErrorPage from './routes/ErrorPage/ErrorPage'
import About from './routes/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <Index/>
          },
          {
            path: "/about",
            element: <About/>
          },
        ]
      }
    ]
  }
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#61b2ff'
    },
    secondary: {
      different: '#ff50ef',
      main: '#e7e7e7',
      color: '#fff5b3'
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

