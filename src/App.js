import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/navigation/navBar';
import { BrowserHeader } from './components/header/header';
import { Global, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './store/darkModeSlice';

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className="App">
      <Global 
        styles={css`
          :root {
            --svgbrightness: ${darkMode.darkMode ? '15%' : '85%'};
            --bgdarkest: ${darkMode.darkMode ? '#1f1f1f' : '#e9e9e9'};
            --bgdark: ${darkMode.darkMode ? '#222222' : '#f9f9f9'};
            --bglight:  ${darkMode.darkMode ? '#252525' : '#fcfcfc'};
            --bglightest:  ${darkMode.darkMode ? '#282828' : '#fff'};
            --mainlight: ${darkMode.darkMode ? '#565656' : '#f4f4f4'};
            --mainmedlight: ${darkMode.darkMode ? '#4b4b4b' : '#e9e9e9'};
            --mainmed: ${darkMode.darkMode ? '#404040' : '#dedede'};
            --mainmeddark: ${darkMode.darkMode ? '#353535' : '#d3d3d3'};
            --maindark: ${darkMode.darkMode ? '#2a2a2a' : '#c8c8c8'};
            --contrastmain: ${darkMode.darkMode ? '#222' : '#7ba4aa'};
            --contrastpink: ${darkMode.darkMode ? '#b57880' : '#693452'};
            --browserdark: ${darkMode.darkMode ? '#111111' : '#bababa'};
            --browsermeddark: ${darkMode.darkMode ? '#222222' : '#c8c8c8'};
            --browsermed: ${darkMode.darkMode ? '#353535' : '#d3d3d3'};
            --browsermedlight: ${darkMode.darkMode ? '#404040' : '#dedede'};
            --browserlight: ${darkMode.darkMode ? '#565656' : '#e9e9e9'};
            --fontprimary: ${darkMode.darkMode ? '#fff' : '#1f1f1f'};
            --fontsecondary: ${darkMode.darkMode ? '#bababa' : '#565656'};
            --fontcolor: ${darkMode.darkMode ? '#fff' : '#693452'};
            --shadows: ${darkMode.darkMode ? '#121212' : '#b9b9b9'};
          }
        `}
      />
      <div className="Monitor">
        <div className="Screen">
          <NavBar />
          <BrowserHeader />
          <Outlet />       
      </div>
      </div>
      <div className="Stand"></div>
    </div>
  );
}

export default App;
