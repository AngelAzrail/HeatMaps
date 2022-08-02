import { useContext, useEffect } from 'react';
import bbox from '@turf/bbox';
import { transformExtent } from 'ol/proj';
import { GeoJSON } from 'ol/format';
import MapContext from '../../MapContext';
import points from '../../../../points';
import SourceContext from './SourceContext';

const Extent = () => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);

  const features = source.getFeatures();

  const geoJson = new GeoJSON().writeFeatures(source.getFeatures());

  useEffect(() => {
    // const extent = bbox(geoJson);
    // map.getView().fit(transformExtent(extent, 'EPSG:4326', 'EPSG:3857'));
  }, [map, source, features]);

  return null;
};
export default Extent;
