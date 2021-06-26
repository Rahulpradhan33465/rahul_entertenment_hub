import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import {Chip} from '@material-ui/core'

const Geners = ({ setGener,gener,selectedGener,setSelectedGener,setPage,type }) => {


    const handleAdd=(genres)=>{
        setSelectedGener([...selectedGener,genres]);
        setGener(gener.filter((g)=>g.id!==genres.id));
        setPage(1);
    }

    const handleDelete=(genres)=>{
        setSelectedGener(selectedGener.filter((selected)=>selected.id!==genres.id));
        setGener([...gener,genres]);
        setPage(2);
    }

    const fetchGener=async ()=>{
        const genres=await axios.get(` https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
       setGener(genres.data.genres)
    //    console.log(genres.data.genres);
      
    }
    // console.log(gener)
    useEffect(() => {
       fetchGener();
        return () => {
           fetchGener({})
        }
    }, [])


    
    return (
        <div style={{padding:'6px 0'}}>
             {
                
                selectedGener && selectedGener.map((item)=>(
                 <Chip label={item.name}  clickable key={item.id+1} size='small' onDelete={()=>handleDelete(item)} color='primary' spacing={1} style={{margin:2}}/>
                ))
             }
             
            {
                
               gener && gener.map((item)=>(
                <Chip label={item.name}  clickable key={item.id} size='small' spacing={1} style={{margin:2}} onClick={()=>handleAdd(item)}/>
               ))
            }
            
        </div>
    )
}

export default Geners
