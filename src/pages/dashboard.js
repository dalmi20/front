import React, { useState,useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Sidebar from '../components/Sidebar';
import { Box,Typography,useMediaQuery } from '@mui/material'
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import  Axios  from 'axios';
import {RxUpdate} from 'react-icons/rx'
import {AiFillDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

const navigate = useNavigate();
const token = localStorage.getItem("token");
console.log(token)
  const [data, setData] = useState([]);
  const [citizens, setCitizens] = useState([]);

 /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7778/auth/users/authenticate');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);*/
  useEffect(()=>{ 
    const getDemandes= async () =>{Axios.get(`http://localhost:7778/auth/users/citizen/${localStorage.getItem('nin')}`,{ 
      headers:{"Authorization" : `Bearer ${token}`} 
    }).then((response) =>{ 
      setData(response.data) 
      console.log("response",response); 
    }) 
  }
  getDemandes()
},[])
console.log(data.commune)

useEffect(()=>{ 
    const getDemandes= async () =>{Axios.get(`http://localhost:7778/auth/users/citizens/${data.wilaya}/${data.commune}`,{ 
      headers:{"Authorization" : `Bearer ${token}`} 
    }).then((response) =>{ 
      setCitizens(response.data) 
      console.log("responseeeeeeeeeeeeeeeeee",response.data); 
    }) 
  }
  getDemandes()
},[data.commune,data.wilaya])

    const deleteUser= async (nin) =>{Axios.delete(`http://localhost:7778/auth/users/delete/${nin}`,{ 
      headers:{"Authorization" : `Bearer ${token}`} 
    }).then((response) =>{ 
      console.log("responseDelete",response.data); 
      window.location.reload()
    }) 
  }

console.log("citizens" ,citizens)
  return (
    <div className='flex flex-col '>
    <div className='flex justify-center mt-6  '>
<div class="-my-2 py-2 overflow-x-auto  sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 w-11/12">
                <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-3 ">
                    <div class="flex justify-between">
                    
                        <div class="inline-flex border rounded-md w-4/12 px-2 lg:px-6 h-11 bg-gray-50 ml-5">
                            <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div class="flex">
                                    <span class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" class="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-1/ border border-none border-l-0 rounded rounded-l-none px-1 relative focus:outline-none text-xs lg:text-xs text-gray-500 bg-gray-50 font-light" placeholder="Search"/>
                            </div>
                        </div>
                        <div className='flex'>
                        <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-ver focus:outline-none  bg-gray-50 rounded-lg border border-gray-200 ">Exporter Excel</button>
                        <button type="submit" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-ver focus:outline-none  bg-gray-50 rounded-lg border border-gray-200  " onClick={()=>{navigate("/ajouterCitoyen")}}>Ajouter Citoyen</button>
                        </div>
                       
                    </div>
                </div>
                <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left leading-4 text-ver tracking-wider">NIN</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">NomComplet</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">DateDeNaissance</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">Genre</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">Status</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">Phone</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">Modifier</th>
                                <th class="px-4 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-ver tracking-wider">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            {citizens.map((item)=>(
                                 <tr key={item.id}>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-500">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm leading-5 text-gray-800">{item.nin}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-500">
                                        <div class="text-sm leading-5  text-gray-600">{item.fullNameLat}</div>
                                    </td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b text-gray-600 border-gray-500 text-sm leading-5">{item.birthdate}</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b text-gray-600 border-gray-500 text-sm leading-5">{item.gender}</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b text-gray-600 border-gray-500 text-sm leading-5">{item.status}</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-500 text-gray-600 text-sm leading-5">{""}</td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-500 text-gray-600 text-xl leading-5"><button type='submit'><RxUpdate/></button></td>
                                    <td class="px-4 py-3 whitespace-no-wrap border-b border-gray-500 text-gray-600 text-xl leading-5"><button type='submit' onClick={()=>{deleteUser(item.nin)}}><AiFillDelete/></button></td>
                          </tr>
                            )
                            )}
                                
                        </tbody>
                    </table>
            </div>
            </div>
            </div>

    </div>
    
    

  )
}
