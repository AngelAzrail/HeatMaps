import VectorSource from 'ol/source/Vector';
import { useEffect, useMemo } from 'react';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { GeoJSON } from 'ol/format';
import Extent from './Extent';
import SourceContext from './SourceContext';
import HeatMap from '../Vector/HeatMap/HeatMap';
import ClusterLayer from '../Vector/Cluster/Cluster';
import getPoints from './service';
import points from '../../../../points';

const Source = (): JSX.Element => {
  const source = useMemo(() => new VectorSource(), []);

  useEffect(() => {
    getPoints({ authToken: '' })
      .then(({ data }) => {
        const newFeatures = data.map((feature: any) => {
          const newFeature = new Feature(new Point(fromLonLat([feature.geo.lon, feature.geo.lat])));
          newFeature.setProperties({ id: feature.id, name: feature.name });
          return newFeature;
        });
        source.clear();
        source.addFeatures(newFeatures);
      })
      .catch((err) => {
        const newFeatures = new GeoJSON().readFeatures(points).map((feature: any) => {
          feature.setGeometry(feature.getGeometry().transform('EPSG:4326', 'EPSG:3857'));
          feature.setProperties({ id: feature.id, name: feature.name });
          return feature;
        });
        source.addFeatures(newFeatures);
        console.log(err);
      });
  }, [source]);

  return (
    <SourceContext.Provider value={source}>
      <Extent />
      <HeatMap />
      <ClusterLayer />
    </SourceContext.Provider>
  );
};
export default Source;
