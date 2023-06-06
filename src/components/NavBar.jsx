import React, { useEffect, useState } from 'react'
import { AppBar,Box,Typography, Button, IconButton, InputBase, Toolbar, useTheme, Menu, MenuItem } from '@mui/material';

<<<<<<< HEAD
const NavBar = ({title}) => {
  const [savedTitle, setSavedTitle] = useState('');
=======
const NavBar = ({
  title
}) => {
>>>>>>> 2d3ced16ecc94a441796535683008298ad456144
    const theme = useTheme()

    useEffect(() => {
      const savedTitle = localStorage.getItem('title');
      if (savedTitle) {
        setSavedTitle(savedTitle);
      }
    }, []);
  
    useEffect(() => {
      if (title) {
        setSavedTitle(title);
        localStorage.setItem('title', title);
      }
    }, [title]);

  return (
    <AppBar component="nav"  sx={{
        position: "sticky",
        background: theme.palette.background.nav,
        boxShadow: "none",
        zIndex:"999"
    }}>
        <Box
        width="100%"
        p="1.4rem 1.4rem"
        sx={{ borderBottom: 1 }}
        >
<<<<<<< HEAD
        <Typography variant='h2' color="white">{savedTitle}</Typography>
=======
        <Typography variant='h2' color="white">{title}</Typography>
>>>>>>> 2d3ced16ecc94a441796535683008298ad456144
    </Box>
        
    </AppBar>
  )
}

export default NavBar