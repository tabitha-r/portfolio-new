import { configureStore } from '@reduxjs/toolkit';
import SkillsReducer from './skillsSlice';
import DarkModeReducer from './darkModeSlice';
import PortfolioReducer from './portfolioSlice';

export const store = configureStore({
  reducer: {
    skills: SkillsReducer,
    darkMode: DarkModeReducer,
    portfolio: PortfolioReducer,
  },
});
