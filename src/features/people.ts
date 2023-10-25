import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Person } from '../types/Person';
import { getPeople } from '../api/people';

type PeopleState = {
  people: Person[];
  totalCount: number;
  isLoading: boolean;
  error: string;
}

const initialState: PeopleState = {
  people: [],
  totalCount: 0,
  isLoading: false,
  error: '',
};

export const init = createAsyncThunk('people/fetch', (options:{page: number, limit: number}) => {
  return getPeople(options.page, options.limit);
});

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    // remove: (state, action: PayloadAction<number>) => {
    //   state.comments = state.comments
    //     .filter(comment => comment.id !== action.payload);
    // },
  },

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

    // builder.addCase(addComment.fulfilled, (state, action) => {
    //   state.comments = [...state.comments, action.payload];
    // });
  },
});

export const { } = peopleSlice.actions;
export default peopleSlice.reducer;