import { useContext, useEffect } from 'react';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import MapContext from '../MapContext';

const OSMLayer = (): null => {
  const map = useContext(MapContext);

  useEffect(() => {
    const osmLayer = new TileLayer({
      source: new OSM(),
    });
    map.addLayer(osmLayer);

    return () => {
      map.removeLayer(osmLayer);
    };
  }, [map]);
  return null;
};
export default OSMLayer;
