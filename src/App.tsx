import React from 'react';
import 'leaflet/dist/leaflet.css';
import Router from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
