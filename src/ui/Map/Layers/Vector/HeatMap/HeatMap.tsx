import { useContext, useEffect, useMemo } from 'react';
import { Heatmap } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';
import SourceContext from '../../Source/SourceContext';
import MapContext from '../../../MapContext';
import HeatMapOptions from './HeatMapOptions';

const HeatMapLayer = (): JSX.Element => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);

  const heatmap = useMemo(
    () =>
      new Heatmap({
        source: source as VectorSource<Point>,
        radius: 10,
        blur: 10,
        weight(): number {
          return Math.random() * 5 + 5;
        },
      }),
    [source]
  );

  useEffect(() => {
    map.addLayer(heatmap);

    return () => {
      map.removeLayer(heatmap);
    };
  }, [source, map, heatmap]);

  return <HeatMapOptions layer={heatmap} />;
};
export default HeatMapLayer;
