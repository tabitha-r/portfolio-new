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
            --bgdarkest: ${darkMode.darkMode ? '#1f1f1f' : '#f4f4f4'};
            --bgdark: ${darkMode.darkMode ? '#222222' : '#f9f9f9'};
            --bglight:  ${darkMode.darkMode ? '#252525' : '#fcfcfc'};
            --biglighest:  ${darkMode.darkMode ? '#282828' : '#ffffff'};
            --mainlight: ${darkMode.darkMpde ? '#f8f8f8' : '#c1c1c1'};
            --mainmedlight: ${darkMode.darkMpde ? '#cecece' : '#989898'};
            --mainmed: ${darkMode.darkMpde ? '#a3a3a3' : '#707070'};
            --mainmeddark: ${darkMode.darkMpde ? '#797979' : '#474747'};
            --maindark: ${darkMode.darkMpde ? '#4e4e4e' : '#1f1f1f'};
            --browserdark: ${darkMode.darkMode ? '#111111' : '#bababa'};
            --browsermeddark: ${darkMode.darkMode ? '#222222' : '#c8c8c8'};
            --browsermed: ${darkMode.darkMode ? '#353535' : '#d3d3d3'};
            --browsermedlight: ${darkMode.darkMode ? '#404040' : '#dedede'};
            --browserlight: ${darkMode.darkMode ? '#565656' : '#e9e9e9'};
            --fontprimary: ${darkMode.darkMode ? '#fff' : '#1f1f1f'};
            --fontsecondary: ${darkMode.darkMode ? '#bababa' : '#565656'};
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
