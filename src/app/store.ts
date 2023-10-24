import { configureStore } from '@reduxjs/toolkit';
import loginReduser from '../features/login'

export const store = configureStore({
  reducer: {
    login: loginReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;