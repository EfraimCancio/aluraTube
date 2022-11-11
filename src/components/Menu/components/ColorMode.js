import React from 'react';

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {alert("Borabill")},
    toggleMode: () => {alert("Borabill")},
})

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return (
        <div>
            <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
                {props.children} 
            </ColorModeContext.Provider>
        </div>
    )
}