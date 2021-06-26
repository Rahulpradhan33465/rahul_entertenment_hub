import React from 'react'
import {Pagination} from '@material-ui/lab'
import { createMuiTheme,ThemeProvider } from '@material-ui/core';
const CustomPagination = ({setPage,numberOfPage}) => {

   const  handleChange=(page)=>{

setPage(page);
window.scroll(0,0);
    }
   const dakrTheme=createMuiTheme({
       palette:{
           type:'dark'
       }
   })

    return (
        <div 
        style={{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            marginBottom:10


        }}>
            <ThemeProvider theme={dakrTheme}>
            <Pagination count={numberOfPage?numberOfPage:10} variant="outlined"  onChange={(e)=>handleChange(e.target.textContent)}/>
            </ThemeProvider>
        
        </div>
    )
}

export default CustomPagination
