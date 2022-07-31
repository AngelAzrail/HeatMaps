import { Map } from 'ol';
import { memo, useEffect, useRef } from 'react';
import MapContext from './MapContext';
import OSM from './Layers/OSM';
import MapView from './MapView';
import Vector from './Layers/Vector/Vector';

const MapContainer = memo(({ map }: { map: Map }) => {
  const mapRef = useRef() as any;

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, [map]);

  return (
    <MapContext.Provider value={map}>
      <div style={{ width: '100%', height: '100vh' }} ref={mapRef}>
        <MapView />
        <OSM />
        <Vector />
      </div>
    </MapContext.Provider>
  );
});
MapContainer.displayName = 'MapContainer';

export default MapContainer;
