import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box,Typography,useMediaQuery } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import NavBar from '../../components/NavBar'
import jwt from 'jsonwebtoken';

const token = localStorage.getItem("token");
console.log(token)

  const decodedToken = jwt.decode(token);

  if (decodedToken) {
    // Access the claims from the decoded token
    const { sub, exp, iat, ...claims } = decodedToken;

    localStorage.setItem('roles',claims.roles);

    console.log('Claims:', claims.roles);
  } else {
    console.log('Invalid token');
  }





const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen,setIsSidebarOpen] = useState(true)
    const [isAdmin,setIsAdmin] = useState(false)
    const [isAgent,setIsAgent] = useState(false)
    const [isCitizen,setIsCitizen] = useState(false)
    const [title,setTitle] = useState("")

    const roles = localStorage.getItem("roles")
    
   
    

    const pull_data = (data) =>{
        setTitle(data)
    }

    

    
  
  useEffect(()=>{
    
  if (roles.includes("ROLE_ADMIN")) {
    setIsAdmin(true)
  }else if (roles.includes("ROLE_AGENT")){
    setIsAgent(true)
  }else{
    setIsCitizen(true)
  }
  },[])


  return (
    <Box
    display={isNonMobile ? "flex" : "block"} width="100%" height="100%"
    >
        <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isAdmin={isAdmin}
        isAgent={isAgent}
        isCitizen={isCitizen}
        func={pull_data}
        />
        <Box
        width="100%"
        flexGrow={1}
        >
          <NavBar 
          title={title}
          />
          <Outlet />
        </Box>
          
    </Box>
  )
}

export default Layout