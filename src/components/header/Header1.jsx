import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Stack, Box, IconButton, Typography, useTheme, Container } from "@mui/material";
import { ExpandMore, DarkModeOutlined } from "@mui/icons-material";
import LightModeIcon from '@mui/icons-material/LightMode';
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
    const [selectedIndex, setSelectedIndex] = useState(0);
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

    const handleToggleMode = () => {
        localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
        );
        colorMode.toggleColorMode();
    };


    return (

        <Box sx={{
            bgcolor: "#2B3445",
            py: "4px",
            borderBottomRightRadius: 14,
            borderBottomLeftRadius: 14,
        }}>
            <Container>
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
                                    onClick={handleToggleMode}
                                    color="inherit"
                                >
                                    <LightModeIcon sx={{ fontSize: "17px", color: "#fff" }} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    onClick={handleToggleMode}
                                    color="inherit"
                                >
                                    <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff", }} />
                                </IconButton>
                            )}
                        </div>
                    </div>


                    <List
                        component="nav"
                        aria-label="Language selector"
                        sx={{ p: 0, m: 0, }}
                    >
                        <ListItemButton
                            id="language-button"
                            aria-haspopup="listbox"
                            aria-controls="language-menu"
                            aria-label="Select language"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                            sx={{
                                px: 0.25,
                                py: 0.25,
                                width: "46px",
                                minWidth: "46px",
                                borderRadius: "10px",
                                transition: "all 0.2s ease",
                                justifyContent: "center",
                                gap: 0.05,
                                ".MuiListItemText-root": { mr: 0, textAlign: "center", flex: "0 0 auto" },
                                cursor: "pointer",
                            }}
                        >
                            <ListItemText
                                sx={{
                                    ".MuiTypography-root": {
                                        fontSize: "11px",
                                        color: "#fff",
                                        fontWeight: 600,
                                        letterSpacing: "0.4px",
                                        textAlign: "center",
                                    },
                                }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />

                        </ListItemButton>
                    </List>
                    <Menu
                        id="language-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'language-button',
                                role: 'listbox',
                            },
                            paper: {
                                sx: {
                                    mt: 0.5,
                                    borderRadius: "10px",
                                    minWidth: 50,
                                    boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
                                },
                            },
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                sx={{
                                    fontSize: "11px",
                                    py: 0.75,
                                    px: 1,
                                    minHeight: "unset",
                                    fontWeight: 500,
                                    justifyContent: "center",
                                    textAlign: "center",
                                    "&.Mui-selected": {
                                        bgcolor: "rgba(33, 150, 243, 0.12)",
                                        fontWeight: 700,
                                    },
                                }}
                                key={option}
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
            </Container>

        </Box>
    );
}

export default Header1