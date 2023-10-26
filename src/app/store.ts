import { configureStore } from '@reduxjs/toolkit';
import loginReduser from '../features/login'
import peopleReduser from '../features/people'
import selectedPersonReduser from '../features/selectedPerson'
import artReduser from '../features/art'

export const store = configureStore({
  reducer: {
    login: loginReduser,
    people: peopleReduser,
    selectedPerson: selectedPersonReduser,
    art: artReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;