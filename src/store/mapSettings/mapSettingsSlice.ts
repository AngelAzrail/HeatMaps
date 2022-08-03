import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MapTypes from '../../utils/enums/MapTypes';

export interface MapSettings {
  mapType: MapTypes;
}

const mapSettingsState: MapSettings = {
  mapType: MapTypes.Cluster,
};

const mapSettingsSlice = createSlice({
  name: 'mapSettings',
  initialState: mapSettingsState,
  reducers: {
    changeMapType(state, action: PayloadAction<MapTypes>) {
      state.mapType = action.payload;
    },
  },
});

export const { actions } = mapSettingsSlice;
export default mapSettingsSlice.reducer;
