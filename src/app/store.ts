import { configureStore } from '@reduxjs/toolkit';
import loginReduser from '../features/login'
import peopleReduser from '../features/people'

export const store = configureStore({
  reducer: {
    login: loginReduser,
    people:peopleReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;