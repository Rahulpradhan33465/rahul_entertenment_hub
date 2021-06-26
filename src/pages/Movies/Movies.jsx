import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import  {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import CustomPagination from '../../Component/CustomPagination/CustomPagination';
import SingleCart from '../../Component/SingleCart/SingleCart';
import Geners from '../../Component/Geners/Geners';
import useGenres from '../../Hook/useGenres';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'inherit',
      paddingBottom:'50px'
    },
    gridList: {
      width: 500,
      height: 450,
    },
    toolbar:{
        paddingBottom:'10px'
    }
  
  }));

const Movies = () => {
    
    const classes=useStyles();
    const [page,setPage]=useState(1);
    const [content,setContent]=useState([]);
    const [numberOfPage,setNumberOfPage]=useState();
    const [gener,setGener]=useState([]);
    const [selectedGener,setSelectedGener]=useState([]);
    const generForUrl=useGenres(selectedGener);

  const fetchMovie=async ()=>{
   
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${generForUrl}`);
    setContent(data.results);
  
//    console.log(data.total_pages);
   setNumberOfPage(data.total_pages)
  }
  
 
 useEffect(() => {
  fetchMovie();
  
 }, [page,generForUrl])
  
    return (
        <>
        <span className='title'>Discover Movie</span>
        <Geners
        type='movie'
        setGener={setGener}
        gener={gener}
        selectedGener={selectedGener}
        setSelectedGener={setSelectedGener}
        setPage={setPage}
        type='movie'
        />
        
        <div className={classes.root}>
         <Grid container spacing={1} className={classes.toolbar}>
                {
                    content.map((item)=>{
                        return <SingleCart key={item.id} {...item} media_type='movie'/>
                    })
                }
            
            </Grid>
            {
                     numberOfPage >1 && (
                        <CustomPagination setPage={setPage} numberOfPage={numberOfPage}/>
                     )
                 }
        </div>
        </>
    )
}

export default Movies
