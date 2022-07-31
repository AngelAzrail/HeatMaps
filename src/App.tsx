import React from 'react';
import './App.scss';
import { Map } from 'ol';
import MapContainer from './ui/Map/Map';

const App = (): JSX.Element => {
  const map = new Map({ controls: [] });
  return <MapContainer map={map} />;
};

export default App;
