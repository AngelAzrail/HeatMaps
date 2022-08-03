import React from 'react';
import './App.scss';
import { Map } from 'ol';
import { Provider } from 'react-redux';
import MapContainer from './ui/Map/Map';
import store from './store/store';

const App = (): JSX.Element => {
  const map = new Map({ controls: [] });
  return (
    <Provider store={store}>
      <MapContainer map={map} />
    </Provider>
  );
};

export default App;
