import { useContext, useEffect, useMemo } from 'react';
import VectorLayer from 'ol/layer/Vector';
import MapContext from '../../MapContext';
import SourceContext from '../Source/SourceContext';

const Vector = (): null => {
  const map = useContext(MapContext);
  const source = useContext(SourceContext);
  const vector = useMemo(() => new VectorLayer({ source }), [source]);

  useEffect(() => {
    map.addLayer(vector);

    return () => {
      map.removeLayer(vector);
    };
  }, [map, source, vector]);
  return null;
};
export default Vector;
