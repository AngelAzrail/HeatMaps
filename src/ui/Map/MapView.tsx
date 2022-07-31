import { useContext, useEffect } from 'react';
import { View } from 'ol';
import MapContext from './MapContext';

const MapView = (): null => {
  const map = useContext(MapContext);

  useEffect(() => {
    const view = new View({ center: [0, 0], zoom: 2 });
    map.setView(view);
  }, [map]);

  return null;
};
export default MapView;
