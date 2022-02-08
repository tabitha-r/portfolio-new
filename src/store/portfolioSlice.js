import { createSlice } from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        projects: [
            {
                name: 'Company Homepage',
                desktopPreview: 'va-homepage-desktop',
                mobilePreview: 'va-homepage-mobile',
                tech: ['HTML', 'CSS', 'JavaScript'],
                description: 'A standard homepage for a fictional company.',
                notableFeatures: ['Responsive layout', 'Hamburger menu for mobile'],
                link: 'http://www.tabithariley.digital/va-homepage/',
                id: 'vaHompage',
            },
            {
                name: 'Responsive Club Site',
                desktopPreview: 'club-site-desktop',
                mobilePreview: 'club-site-mobile',
                tech: ['HTML', 'CSS', 'JavaScript'],
                description: 'A standard homepage for a fictional company.',
                notableFeatures: ['Responsive layout', 'Random quote generator'],
                link: 'http://www.tabithariley.digital/club-site/',
                id: 'clubSite',
            },
            {
                name: 'Reddit Client',
                desktopPreview: 'lurkit-desktop',
                mobilePreview: 'lurkit-mobile',
                tech: ['React', 'Redux', 'CSS-in-JS'],
                description: 'A standard homepage for a fictional company.',
                notableFeatures: ['Live data from Reddit through the Reddit API', 'Animated logo on hover', 'Pinnable Subreddits', 'Dark Mode/Light Mode Toggle'],
                link: 'http://www.tabithariley.digital/lurkit/',
                id: 'lurkit',
            },
            {
                name: 'Random Generator',
                desktopPreview: 'tarot-desktop',
                mobilePreview: 'tarot-mobile',
                tech: ['HTML', 'CSS', 'JavaScript'],
                description: 'A random Tarot card reading generator.',
                notableFeatures: ['Randomly generated response', 'Handles user input'],
                link: 'http://www.tabithariley.digital/tarot/',
                id: 'tarot',
            },
            {
                name: 'Portfolio Site',
                desktopPreview: null,
                mobilePreview: null,
                tech: ['HTML', 'CSS', 'JavaScript'],
                description: 'A portfolio site for a designer.',
                notableFeatures: ['Responsive layout', 'Navigation sliding in and out on hover'],
                link: '',
                id: 'portfolio',
            }
        ],
    },
    reducers: {
        
    }
});

export const selectPortfolio = (state) => state.portfolio;
export default portfolioSlice.reducer;
