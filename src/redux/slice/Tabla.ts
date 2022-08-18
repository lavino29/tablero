
import { createSlice } from '@reduxjs/toolkit';
import { Tabla } from '../../models/Tabla.model.';

export const tablaInicial: Tabla[] = [ {
  name: 'transferencia',
  status: "Incompleta",
  grupo: 'CD'  
}];

export const tablaSlice = createSlice({
  name: 'tabla',
  initialState: tablaInicial,
  reducers: {
    addTabla: (state: Tabla[], action: any) => [...state, action.payload],
    resetUs: () => tablaInicial
  }
});

export const { addTabla, resetUs } = tablaSlice.actions;

export default tablaSlice.reducer;