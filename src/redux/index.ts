import { configureStore } from '@reduxjs/toolkit';
import tablaSlice from './slice/Tabla'

export interface AppStore {
  tabla: any;
}

export default configureStore<AppStore>({
  reducer: {
    tabla: tablaSlice
  }
});