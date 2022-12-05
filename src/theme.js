import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const tokens = (modes) => ({
   ...(mode === 'light' 
   ? {
    white: {
        100: "#f9f9f9",
        200: "#f4f4f4",
        300: "#eeeeee",
        400: "#e9e9e9",
        500: "#e3e3e3",
        600: "#b6b6b6",
        700: "#888888",
        800: "#5b5b5b",
        900: "#2d2d2d"
    },
    indigo: {
        100: "#d7dbf9",
        200: "#afb6f3",
        300: "#8892ec",
        400: "#606de6",
        500: "#3849e0",
        600: "#2d3ab3",
        700: "#222c86",
        800: "#161d5a",
        900: "#0b0f2d"
    },
    black: {
        100: "#d2d2d3",
        200: "#a5a5a6",
        300: "#78787a",
        400: "#4b4b4d",
        500: "#1e1e21",
        600: "#18181a",
        700: "#121214",
        800: "#0c0c0d",
        900: "#060607"
    },
   } : {
    white: {
        900: "#2d2d2d",
        800: "#5b5b5b",
        700: "#888888",
        600: "#b6b6b6",
        500: "#e3e3e3",
        400: "#e9e9e9",
        300: "#eeeeee",
        200: "#f4f4f4",
        100: "#f9f9f9",
    },
    indigo: {
        900: "#0b0f2d",
        800: "#161d5a",
        700: "#222c86",
        600: "#2d3ab3",
        500: "#3849e0",
        400: "#606de6",
        300: "#8892ec",
        200: "#afb6f3",
        100: "#d7dbf9",
    },
    black: {
        900: "#060607",
        800: "#0c0c0d",
        700: "#121214",
        600: "#18181a",
        500: "#1e1e21",
        400: "#4b4b4d",
        300: "#78787a",
        200: "#a5a5a6",
        100: "#d2d2d3",
    },
   })
})

//mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'light'
            ? {
                primary: {
                    main: colors.white[500],
                },
                seconary: {
                    main: colors.black[500],
                },
                background: {
                    defualt: colors.white[500],
                },
            } : {
                
            }),
            typography: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 12,
                h1: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 40,
                },
                h2: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 32,
                },
                h3: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 24,
                },
                h4: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 20,
                },
                h5: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 16,
                },
                h6: {
                    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                    fontSize: 14,
                },
            }
        }
    }
}

//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [Mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "dark" ? "light" : "dark"))
        })
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]) 

    return [theme, colorMode];
};