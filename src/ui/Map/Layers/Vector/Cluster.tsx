import { useContext, useEffect, useMemo } from 'react';
import VectorLayer from 'ol/layer/Vector';
import { Cluster } from 'ol/source';
import MapContext from '../../MapContext';
import SourceContext from '../Source/SourceContext';
import ClusterOptions from './ClusterOptions';

const ClusterLayer = (): JSX.Element => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);

  const cluster = useMemo(
    () =>
      new VectorLayer({
        source: new Cluster({
          source,
          distance: 40,
        }),
      }),
    [source]
  );

  useEffect(() => {
    map.addLayer(cluster);

    return () => {
      map.removeLayer(cluster);
    };
  }, [source, map, cluster]);

  return <ClusterOptions layer={cluster} />;
};
export default ClusterLayer;
