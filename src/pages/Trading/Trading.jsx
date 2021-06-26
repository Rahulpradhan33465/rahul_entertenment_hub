import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SingleCart from '../../Component/SingleCart/SingleCart';
import {Grid} from '@material-ui/core'
import  {makeStyles} from '@material-ui/core/styles';
import CustomPagination from '../../Component/CustomPagination/CustomPagination';

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

const Trading = () => {
    const classes=useStyles();
    const [content, setContent] = useState([]);
    const [page,setPage] =useState(1);
    const [numberOfPage,setNumberOfPage]=useState();
    const fetchTrandingData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
        // console.log(data);
        setNumberOfPage(data.total_pages);
    }
useEffect(() => {
   fetchTrandingData();
}, [page])




    return (
        <div className={classes.root}>
         <Grid container spacing={1} className={classes.toolbar}>
                {
                    content.map((item)=>{
                        return <SingleCart key={item.id} {...item}/>
                    })
                }
            
            </Grid>
            {
                     numberOfPage >1 && (
                        <CustomPagination setPage={setPage} numberOfPage={numberOfPage}/>
                     )
                 }
        </div>
    )
}

export default Trading
