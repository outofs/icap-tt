import { createSlice } from '@reduxjs/toolkit';

type Art = {
  isDisplayed: boolean;
};

const initialState: Art = {
  isDisplayed: false,
};

const artSlice = createSlice({
  name: 'art',

  initialState,
  reducers: {
    show: (state) => {
      state.isDisplayed = true;
    },

    hide: (state) => {
      state.isDisplayed = false;
    },
  },
});

export const { show, hide } = artSlice.actions;
export default artSlice.reducer;