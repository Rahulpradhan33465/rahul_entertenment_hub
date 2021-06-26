
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, ThemeProvider, TextField, Button, Tabs, Tab } from '@material-ui/core';
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
    },
  myPad:{
      paddingBottom:'30px'
  }
  }));
const Search = () => {
    const classes=useStyles();
    const [page, setPage] = useState(1);
    const [type, setType] = useState(0);
    const [content, setContent] = useState([]);
    const [searchText, setSearchText] = useState('a');
    const [numberOfPage,setNumberOfPage]=useState();

    const dakrTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',
            },
        },

    })

    const fetchData = async () => {
        const { data } = await axios.get(`
        
https://api.themoviedb.org/3/search/${type ?'tv':'movie'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false
        `);
        setContent(data.results);
        setNumberOfPage(data.total_pages);
    }
useEffect(() => {
   fetchData();
  
}, [type,page])
    return (
        <>
            <span className='title'>Search</span>
            <ThemeProvider theme={dakrTheme}>
                <div style={{ display: 'flex', margin: '15px 0' }}>

                    <TextField
                        style={{ flex: 1 }}
                        label='search'
                        variant="filled"
                       
                        onChange={(e)=>setSearchText(e.target.value)}

                    />
                    <Button variant='contained' style={{ marginLeft: 10 }} onClick={fetchData}><SearchIcon /></Button>
                </div>
                <Tabs className={classes.myPad} value={type} indicatorColor='primary' textColor='primary' variant="fullWidth" onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}>
                    <Tab style={{ width: '50%' }} label='Search Movies' />
                    <Tab style={{ width: '50%' }} label='Search Tv Series' />
                </Tabs>
            </ThemeProvider>
            <div className={classes.root}>
         <Grid container spacing={1} className={classes.toolbar}>
                {
                    content.map((item)=>{
                        return <SingleCart key={item.id} {...item} media_type={type?'tv':'movie'}/>
                    })
                }
                 {
                    !content && (type ?<h2>No series Found</h2>:<h2>No Movie Found</h2>)
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

export default Search
