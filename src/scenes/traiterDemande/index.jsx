import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DescriptionOutlined,AccessTime,CheckCircle } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

import Axios from 'axios'


const TraiterDemande = () => {
  let navigate = useNavigate();
  const [data,setData] = useState([])
  const token = localStorage.getItem("token")
  
  
  

  useEffect(()=>{
    console.log(token);
    const getDemandes = Axios.get("http://localhost:7778/demande/api/all",{
      headers:{"Authorization" : `Bearer ${token}`}
    }).then((response) =>{
      setData(response.data)
      console.log("response",response);
    })
  },[])


  const element = [
    {
      id:1,
      title:"Extrait de naissance",
      date: "23/03/26 16:55",
      valide:"pret",
      a:true,
      icon: <DescriptionOutlined sx={{fontSize:"3rem"}}/>
    },
    {
      id:2,
      title:"Extrait de naissan",
      date: "23/03/26 16:55",
      valide:"en attente",
      a:false,
      icon: <DescriptionOutlined sx={{fontSize:"3rem"}}/>
    }
  ]

  const assignerAgent = (object) =>{
    Axios.put(`http://localhost:7778/demande/api/${object.id}/assign/${localStorage.getItem("nin")}`,{
      headers:{"Authorization" : `Bearer ${token}`}
    }).then((response) =>{
      console.log("agent assigned");
    })
  }

  const handleClick = (object) =>{
    console.log(object.title);

    
    /*navigate(`/traiterdemande/details/${object.id}`,{
      state:{
        id:object.id,
        title:object.nom,
        date:object.dateDeCreation,
        etats:object.etats
      }
    }) */

  }

  return (
    <Box
    width="100%"
    display="flex"
    padding="1.3rem"
    zIndex="1"
    >
        <Grid container spacing={2}>
          {
            data.map(e => (
              <Grid item key={e.id} xs={12} md={6} lg={3} >
                <Paper>
                  <Box display="flex" flexDirection="column" alignItems="center" pt="2rem" pb="1rem">
                    <Box >
                    { e.nom === "Extrait de Naissance" && <DescriptionOutlined sx={{fontSize:"3rem"}}/> }
                    { e.nom === "Passport" && <DescriptionOutlined sx={{fontSize:"3rem"}}/> }
                    </Box>
                    <Typography color="black" fontWeight="bold" variant='h5'>{e.nom}</Typography>
                    <Typography variant='h6'>{e.dateDeCreation}</Typography>
                    {e.etats === "CREATED" ? 
                    <Box mt="1rem" display="flex" alignItems="center">
                      <CheckCircle/>
                      <Typography ml="0.3rem" variant='h6'>{e.etats}</Typography>
                    </Box> : 
                    <Box mt="1rem" display="flex" alignItems="center">
                      <AccessTime/>
                      <Typography ml="0.3rem" variant='h6'>{e.etats}</Typography>
                    </Box>
                    }
                    <Box display="flex" justifyContent="center" sx={{ borderTop: 1, borderColor:"#C0C0C0" }} mt="1.8rem" pt="0.7rem" width="65%">
                      <Button onClick={()=>assignerAgent(e)} variant="contained" color='secondary' sx={{borderRadius:0}} disableElevation>
                        Ajouter
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
    </Box>
  )
}


export default TraiterDemande