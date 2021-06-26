import React,{useState,useEffect} from 'react'
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core'
import {LiveTv,Whatshot,Movie, Search} from '@material-ui/icons'
import { makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router';


 const useStyles = makeStyles((theme)=>({
    root: {
      width: '100%',
      position:'fixed',
      bottom:0,
      backgroundColor:'#2d313a'
    },
    [theme.breakpoints.up('xs')]:{
         myColor:{
            minWidth:'60px'
         }
    },
    myColor:{
        color:'white',
        fontFamily:`' Libre Baskerville', serif`,
        fontWeight:'bold'
    }
  }));
const BottomNav=()=>{
    const classes=useStyles();
    const history=useHistory();

    const [select,setSelect]=useState(0);


    
useEffect(() => {
   if(select===0){
       history.push('/');
   }
   else if (select===1){
       history.push('/movies');
   }
   else if(select===2){
       history.push('/tvSeries');
   }
   else if(select===3){
       history.push('/search')
   }
}, [select,history])
   return (
       <>   
       <BottomNavigation
           value={select}
           onChange={(event,newValue)=>{
               setSelect(newValue);
            //    console.log(select);
           }}
           showLabels
           className={classes.root}

       >
           <BottomNavigationAction className={classes.myColor} label='trending' icon={<Whatshot/>}/>
           <BottomNavigationAction className={classes.myColor} label='movies' icon={<Movie/>}/>
           <BottomNavigationAction  className={classes.myColor} label='tv show' icon={<LiveTv/>}/>
           <BottomNavigationAction  className={classes.myColor} label='search' icon={<Search/>}/>

 

       </BottomNavigation>

       </>
   )
}

export default BottomNav;