import { createSlice } from '@reduxjs/toolkit';

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        skills: [
            {
                name: 'HTML',
                fullName: 'Hyper Text Markup Language',
                description: 'The base of any web page. It is the coding language that says what is on the page.',
                icon: 'faHtml5',
                tags: ['frontend', 'design'],
                level: 9,
            },
            {
                name: 'CSS',
                fullName: 'Cascading Style Sheets',
                description: 'It goes hand in hand with HTML. While HTML says what is on the page, CSS controls how it looks.',
                icon: 'faCss3',
                tags: ['frontend', 'design'],
                level: 8,
            },
            {
                name: 'JavaScript',
                fullName: '',
                description: 'HTML can\'t change on its own, but with the help of JavaScript - almost anything is possible.',
                icon: 'faJsSquare',
                tags: ['frontend', 'interactivity'],
                level: 7,
            },
            {
                name: 'Node.js',
                fullName: '',
                description: '',
                icon: 'faNodeJs',
                tags: ['development', 'backend'],
                level: 2,
            },
            {
                name: 'React',
                fullName: '',
                description: 'Combining HTML, CSS, and JavaScript into all you need to make single page applications.',
                icon: 'faReact',
                tags: ['frontend', 'design', 'interactivity'],
                level: 8,
            },
            {
                name: 'PHP',
                fullName: 'Hypertext Preprocessor',
                description: '',
                icon: 'faPhp',
                tags: ['frontend', 'design', 'backend', 'interactivity'],
                level: 7,
            },
            {
                name: 'Git',
                fullName: '',
                description: '',
                icon: 'faGitAlt',
                tags: ['development'],
                level: 6,
            },
            {
                name: 'GitHub',
                fullName: '',
                description: '',
                icon: 'faGithub',
                tags: ['development'],
                level: 6,
            },
            {
                name: 'WordPress.org',
                fullName: '',
                description: '',
                icon: 'faWordpress',
                tags: ['frontend', 'design', 'backend', 'cms', 'interactivity'],
                level: 8,
            },
            {
                name: 'Sass',
                fullName: '',
                description: '',
                icon: 'faSass',
                tags: ['frontend', 'design'],
                level: 7,
            },
            {
                name: 'Frontity',
                fullName: '',
                description: 'A means of creating React sites for Wordpress content.',
                icon: 'faChevronsRight',
                tags: ['frontend', 'design', 'backend', 'cms', 'interactivity'],
                level: 6,
            },
        ],
    },
    reducers: {
        
    }
});

export const selectSkills = (state) => state.skills;
export default skillsSlice.reducer;