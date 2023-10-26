import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Person } from '../types/Person';
import { getPeople, patchPerson } from '../api/people';

type PeopleState = {
  people: Person[];
  totalCount: number;
  isLoading: boolean;
  error: string;
};

const initialState: PeopleState = {
  people: [],
  totalCount: 0,
  isLoading: false,
  error: '',
};

export const init = createAsyncThunk('people/fetch', (options: { page: number, limit: number; }) => {
  return getPeople(options.page, options.limit);
});

export const updatePerson = createAsyncThunk('people/update', (updatedPerson: Person) => {
  return patchPerson(updatedPerson);
});

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(init.pending, (state) => {
        state.isLoading = true;
      });

    builder.addCase(init.fulfilled, (state, action) => {
      state.isLoading = false;
      state.people = action.payload.results;
      state.totalCount = action.payload.count;
    });

    builder.addCase(init.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error!';
    });

    builder.addCase(updatePerson.fulfilled, (state, action) => {
      state.people = state.people.map(person => {
        if (person.id === action.payload.id) {
          return action.payload;
        }

        return person;
      });
    });
  },
});

export default peopleSlice.reducer;