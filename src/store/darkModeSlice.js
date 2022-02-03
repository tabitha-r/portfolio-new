import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const selectDarkMode = (state) => state.darkMode;
export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;