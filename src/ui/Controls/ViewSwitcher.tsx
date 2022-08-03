import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/store';
import MapTypes from '../../utils/enums/MapTypes';

const ViewSwitcher = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleMapTypeChange = (mapType: MapTypes): void => {
    dispatch(actions.changeMapType(mapType));
  };

  return (
    <>
      <Button type="primary" onClick={(): void => handleMapTypeChange(MapTypes.Cluster)}>
        Cluster
      </Button>{' '}
      <Button type="primary" onClick={(): void => handleMapTypeChange(MapTypes.Heat)}>
        Heat
      </Button>
    </>
  );
};
export default ViewSwitcher;
