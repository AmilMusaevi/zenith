import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store.config";
import { IState } from "./store";

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