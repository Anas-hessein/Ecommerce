import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Stack, Box, IconButton, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const options = [
    'EN',
    'AR',
];


const Header1 = () => {

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    }; 

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (

        <Box sx={{
            bgcolor: "#2B3445"
        }}>

            <Stack direction={"row"} alignItems={"center"}>

                <Typography
                    sx={{
                        mr: 2,
                        p: "3px 10px",
                        bgcolor: "#d23f57",
                        borderRadius: "12px",
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "#fff",
                    }}
                    variant="body2"
                >
                    HOT
                </Typography>

                <Typography
                    sx={{
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "#fff",
                    }}
                    variant="body2"
                >
                    Free Express Shipping
                </Typography>

                <Box flexGrow={1} />

                <div>
                    <div>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <LightModeOutlined fontSize="small" />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined fontSize="small" />
                            </IconButton>
                        )}
                    </div>
                </div>


                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ bgcolor: 'background.paper' }}
                >
                    <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                           
                            secondary={options[selectedIndex]}
                        />
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        },
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>

                <FacebookIcon sx={{ color: "#fff", fontSize: "16px" }} />
                <InstagramIcon sx={{ color: "#fff", fontSize: "16px", mx: 1 }} />
                <XIcon sx={{ color: "#fff", fontSize: "16px", mr: 1 }} />

            </Stack>

        </Box>
    );
}

export default Header1