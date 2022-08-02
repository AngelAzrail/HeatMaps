import { useContext, useEffect } from 'react';
import bbox from '@turf/bbox';
import { transformExtent } from 'ol/proj';
import { GeoJSON } from 'ol/format';
import MapContext from '../../MapContext';
import SourceContext from './SourceContext';

const Extent = (): null => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);

  const features = source.getFeatures();

  const geoJson = new GeoJSON().writeFeatures(source.getFeatures());

  useEffect(() => {
    const extent = bbox(JSON.parse(geoJson));
    console.log(extent);
    // map.getView().fit(transformExtent(extent, 'EPSG:4326', 'EPSG:3857'));
  }, [map, source, features, geoJson]);

  return null;
};
export default Extent;
