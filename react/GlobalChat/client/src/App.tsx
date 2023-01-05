import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ChatInterface from './Pages/ChatInterface';

function App() {
  const routes = [
    {
      path: '/',
      element: ChatInterface,
    },
  ];

  return (
    <>
      <header></header>
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              element={<route.element />}
              path={route.path}
              index={route.path === '/'}
            />
          ))}
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
