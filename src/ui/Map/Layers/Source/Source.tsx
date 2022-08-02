import VectorSource from 'ol/source/Vector';
import { useEffect, useMemo } from 'react';
import axios from 'axios';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import Extent from './Extent';
import SourceContext from './SourceContext';
import HeatMap from '../Vector/HeatMap';
import ClusterLayer from '../Vector/Cluster';

const Source = (): JSX.Element => {

  const source = useMemo(() => new VectorSource(), []);

  useEffect(() => {
    axios
      .get('https://metrics.dtechs.io/dem-api/analytics/geo?from=2022-01-01&to=2022-02-01', {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1OTQ0MDg5NCwiaWF0IjoxNjU5NDMxODk0fQ.qmAeEXZe3jK088QYL1-9VifDOh8WO5mlreG6VFivMOgb_xZpFXBUGkh5JV6_Q81SbHjQXHJ1x641vHl1Dr-vyA',
        },
      })
      .then(({ data }) => {
        const newFeatures = data.map((feature: any) => {
          const newFeature = new Feature(new Point(fromLonLat([feature.geo.lon, feature.geo.lat])));
          newFeature.setProperties({ id: feature.id, name: feature.name });
          return newFeature;
        });
        source.clear();
        source.addFeatures(newFeatures);
      })
      .catch((err) => console.log(err));
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
