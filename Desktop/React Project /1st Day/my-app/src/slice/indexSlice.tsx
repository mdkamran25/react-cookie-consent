import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";


interface timerData {
  value: string;
  active: boolean;
}

interface updateData {
  value: string,
  active: boolean,
  index: number
}
const initialState: timerData[] = [
  
]

export const counterSlice = createSlice({
  name: 'timer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addAlarm: (state, action: PayloadAction<timerData>) => {
      const data = action.payload;
      state.unshift(data)
    },
    deleteAlarm: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      const alarmId: number = action.payload
      const timer = state.filter((item, index) => alarmId !== index)
      return timer
    },
    updateAlarm: (state, action: PayloadAction<updateData>) => {
      const { index, value, active } = action.payload;

      const updatedItem = { ...state[index], value, active };
      state[index] = updatedItem;
    },
  },
})

export const { addAlarm, deleteAlarm, updateAlarm } = counterSlice.actions

export default counterSlice.reducer
