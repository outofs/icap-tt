import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../api/login';
import { LoginData } from '../types/Login';

type LoginState = {
  status: number | null;
  isLoading: boolean;
  error: string;
};

const initialState: LoginState = {
  status: null,
  isLoading: false,
  error: '',
};

export const init = createAsyncThunk('login/fetch', (loginData: LoginData) => {
  return login(loginData);
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    cleanStatus: (state) => {
      state.status = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(init.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(init.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.status;
      })
      .addCase(init.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error!';
      });
  },
});

export const { cleanStatus } = loginSlice.actions;
export default loginSlice.reducer;