import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Person } from '../types/Person';

type SelectedPerson = {
  person: Person | null;
};

const initialState: SelectedPerson = {
  person: null,
};

const selectedPersonSlice = createSlice({
  name: 'selectedPerson',

  initialState,
  reducers: {
    selectPerson: (state, action: PayloadAction<Person>) => {
      state.person = action.payload;
    },

    unselectPerson: (state) => {
      state.person = null;
    },
  },
});

export const { selectPerson, unselectPerson } = selectedPersonSlice.actions;
export default selectedPersonSlice.reducer;
