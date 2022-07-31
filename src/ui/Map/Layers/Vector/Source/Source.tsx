import VectorSource from 'ol/source/Vector';
import { useEffect } from 'react';
import { GeoJSON } from 'ol/format';
import points from '../../../../../points';

const Source = ({ layer }: any): null => {
  const source = new VectorSource();

  const features = new GeoJSON().readFeatures(points).map((feature) => {
    feature.setGeometry(feature.getGeometry()?.transform('EPSG:4326', 'EPSG:3857'));
    return feature;
  });

  useEffect(() => {
    source.addFeatures(features);
    layer.setSource(source);
  }, [layer]);

  return null;
};
export default Source;
