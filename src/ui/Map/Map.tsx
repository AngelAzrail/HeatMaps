import { Map } from 'ol';
import { memo, useEffect, useRef } from 'react';
import MapContext from './MapContext';
import OSM from './Layers/OSM';
import MapView from './MapView';
import Source from './Layers/Source/Source';
import ViewSwitcher from '../Controls/ViewSwitcher';

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
        <Source />
        <ViewSwitcher />
      </div>
    </MapContext.Provider>
  );
});
MapContainer.displayName = 'MapContainer';

export default MapContainer;
