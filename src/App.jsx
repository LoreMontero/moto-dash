import Navbar from './scenes/global/Navbar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseLine, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-violet-800 via-cyan-100 to-violet-100">
            <Navbar />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}