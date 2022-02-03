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
                moreInfo: false,
            },
            {
                name: 'CSS',
                fullName: 'Cascading Style Sheets',
                description: 'It goes hand in hand with HTML. While HTML says what is on the page, CSS controls how it looks.',
                icon: 'faCss3',
                tags: ['frontend', 'design'],
                moreInfo: false,
            },
            {
                name: 'JavaScript',
                fullName: '',
                description: 'HTML can\'t change on its own, but with the help of JavaScript - almost anything is possible.',
                icon: 'faJsSquare',
                tags: ['frontend', 'interactivity'],
                moreInfo: false,
            },
            {
                name: 'Node.js',
                fullName: '',
                description: '',
                icon: 'faNodeJs',
                tags: ['development', 'backend'],
                moreInfo: false,
            },
            {
                name: 'React',
                fullName: '',
                description: 'Combining HTML, CSS, and JavaScript into all you need to make single page applications.',
                icon: 'faReact',
                tags: ['frontend', 'design', 'interactivity'],
                moreInfo: false,
            },
            {
                name: 'PHP',
                fullName: 'Hypertext Preprocessor',
                description: '',
                icon: 'faPhp',
                tags: ['frontend', 'design', 'backend', 'interactivity'],
                moreInfo: false,
            },
            {
                name: 'Git',
                fullName: '',
                description: '',
                icon: 'faGitAlt',
                tags: ['development'],
                moreInfo: false,
            },
            {
                name: 'GitHub',
                fullName: '',
                description: '',
                icon: 'faGithub',
                tags: ['development'],
                moreInfo: false,
            },
            {
                name: 'WordPress.org',
                fullName: '',
                description: '',
                icon: 'faWordpress',
                tags: ['frontend', 'design', 'backend', 'cms', 'interactivity'],
                moreInfo: false,
            },
        ],
    },
    reducers: {
        toggleMoreInfo: (state, action) => {
            const name = action.payload;
            state.skills.forEach(skill => {
                if (skill.name === name) {
                    skill.moreInfo = !skill.moreInfo;
                }
            });
        },
        filterSkills: (state, action) => {
            const filter = action.payload;
            state.skills.forEach((skill) => {
                if (skill.tags.include(filter)) {
                    skill.moreInfo = true;
                } else {
                    skill.moreInfo = false;
                }
            })
        },
    }
});

export const selectSkills = (state) => state.skills;
export const { toggleMoreInfo, filterSkills } = skillsSlice.actions;
export default skillsSlice.reducer;