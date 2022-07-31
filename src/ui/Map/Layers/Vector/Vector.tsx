import { useContext, useEffect } from 'react';
import VectorLayer from 'ol/layer/Vector';
import MapContext from '../../MapContext';
import Source from './Source/Source';

const Vector = (): JSX.Element => {
  const map = useContext(MapContext);
  const vector = new VectorLayer();

  useEffect(() => {
    map.addLayer(vector);

    return () => {
      map.removeLayer(vector);
    };
  }, [map]);
  return <Source layer={vector} />;
};
export default Vector;
