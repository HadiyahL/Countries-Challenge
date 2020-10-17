import React from 'react';
import Title from './Title';
import ToggleDarkModeBtn from './ToggleDarkModeBtn';

const Heading = ({darkMode, setDarkMode})=> {
    return (
      <header className='header'>
        <Title />
        <ToggleDarkModeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
    );
}

export default Heading;