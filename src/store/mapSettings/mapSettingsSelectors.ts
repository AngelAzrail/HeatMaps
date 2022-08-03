import { RootState } from '../store';
import { MapSettings } from './mapSettingsSlice';

const getMapSettingsState = (state: RootState): MapSettings => state.mapSettings;

const getMapType = (state: RootState): string => state.mapSettings.mapType;

export { getMapSettingsState, getMapType };
