import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mapSettingsReducer, { actions as mapSettingsActions } from './mapSettings/mapSettingsSlice';
import * as mapSettingsSelectors from './mapSettings/mapSettingsSelectors';

const reducer = combineReducers({
  mapSettings: mapSettingsReducer,
});

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer,
  middleware: customizedMiddleware,
});

const actions = {
  ...mapSettingsActions,
};

const selectors = {
  ...mapSettingsSelectors,
};

export { actions };
export { selectors };
export type RootState = ReturnType<typeof reducer>;
export default store;
