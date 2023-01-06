import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Game from './Pages/Game/Game';

function App() {
  const routes = [
    {
      path: '/',
      element: Game,
    },
  ];

  return (
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
  );
}

export default App;
