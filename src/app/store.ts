import { configureStore } from '@reduxjs/toolkit';
import loginReduser from '../features/login'
import peopleReduser from '../features/people'
import selectedPersonReduser from '../features/selectedPerson'

export const store = configureStore({
  reducer: {
    login: loginReduser,
    people: peopleReduser,
    selectedPerson: selectedPersonReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;