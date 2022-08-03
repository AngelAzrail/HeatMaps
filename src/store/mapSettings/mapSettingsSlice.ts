import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MapSettings {
  mapType: string;
}

const mapSettingsState: MapSettings = {
  mapType: '',
};

const mapSettingsSlice = createSlice({
  name: 'mapSettings',
  initialState: mapSettingsState,
  reducers: {
    changeMapType(state, action: PayloadAction<string>) {
      state.mapType = action.payload;
    },
  },
});

export const { actions } = mapSettingsSlice;
export default mapSettingsSlice.reducer;
