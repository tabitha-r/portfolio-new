import { configureStore } from '@reduxjs/toolkit';
import SkillsReducer from './skillsSlice';
import DarkModeReducer from './darkModeSlice';

export const store = configureStore({
  reducer: {
    skills: SkillsReducer,
    darkMode: DarkModeReducer,
  },
});
