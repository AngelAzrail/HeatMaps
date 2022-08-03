import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMapType } from '../../../../../store/mapSettings/mapSettingsSelectors';
import MapTypes from '../../../../../utils/enums/MapTypes';

const HeatMapOptions = ({ layer }: any): null => {
  const mapType = useSelector(getMapType);

  useEffect(() => {
    layer.setVisible(mapType === MapTypes.Heat);
  });
  return null;
};
export default HeatMapOptions;
