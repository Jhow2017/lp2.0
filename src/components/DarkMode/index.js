import { useState, useEffect } from 'react';


const DarkMode = () => {

  const [darkMode, setDarkMode] = useState(getInitialMode());

    useEffect(()=> {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode(){
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPreferDark = getPrefColorScheme();

        // Se o modo foi salvo -> Dark / Light
        if(isReturningUser){
            return savedMode;
            // Se o esquema de cores preferido for Dark -> Dark
        }
        else if (userPreferDark){
            return true;
            // caso contrário -> Light
        }
        else {
           return false; 
        }
    }

    function getPrefColorScheme(){
        if(!window.matchMedia) return ;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    
  
  return (
    <div className="toggle-container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <span className="toggle">
            <input
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
            id="checkbox"
            className="checkbox"
            type="checkbox"
            />
            <label htmlFor="checkbox" />
        </span>
        <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
        Toggle
        </button> */}
    </div>
  );
};

export default DarkMode;
