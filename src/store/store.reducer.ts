import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./store.types";
const initialState: IState = {
  loader: false,
  user: null,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setLoader: (state: IState, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});


export const {setLoader} = rootSlice.actions

export default rootSlice.reducer