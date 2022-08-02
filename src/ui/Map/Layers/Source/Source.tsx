import VectorSource from 'ol/source/Vector';
import { useEffect, useMemo } from 'react';
import { GeoJSON } from 'ol/format';
import points from '../../../../points';
import Extent from './Extent';
import SourceContext from './SourceContext';
import HeatMap from '../Vector/HeatMap';

const Source = (): JSX.Element => {
  const features = new GeoJSON().readFeatures(points).map((feature) => {
    feature.setGeometry(feature.getGeometry()?.transform('EPSG:4326', 'EPSG:3857'));
    return feature;
  });

  const source = useMemo(() => new VectorSource(), []);

  useEffect(() => {
    source.clear();
    source.addFeatures(features);
  }, [source, features]);

  return (
    <SourceContext.Provider value={source}>
      <Extent />
      <HeatMap />
    </SourceContext.Provider>
  );
};
export default Source;
