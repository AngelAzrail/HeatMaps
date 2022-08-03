import { RootState } from '../store';
import { MapSettings } from './mapSettingsSlice';
import MapTypes from '../../utils/enums/MapTypes';

const getMapSettingsState = (state: RootState): MapSettings => state.mapSettings;

const getMapType = (state: RootState): MapTypes => state.mapSettings.mapType;

export { getMapSettingsState, getMapType };
