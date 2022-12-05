import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material';
import { LightModeOutlinedIcon } from '@mui/icons-material';
import { DarkModeOutlinedIcon } from '@mui/icons-material';
import { NotificationsOutlinedIcon } from '@mui/icons-material';
import { SettingsOutlinedIcon } from '@mui/icons-material';
import { PersonOutlinedIcon } from '@mui/icons-material';
import { SearchIcon } from '@mui/icons-material';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <div className="flex justify-between">
            <IconButton></IconButton>
        </div>
    );
}

export default Topbar;