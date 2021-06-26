import React from 'react'
import {Grid, GridListTile,GridListTileBar,IconButton,Badge} from '@material-ui/core'
import { Star} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core';
import {img_300,img_500,noPicture,unavailable} from '../../Data/data'
import ContentModal from '../ContentModal/ContentModal'
const useStyles = makeStyles((theme) => ({
    
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    span:{
      fontSize:'15px',
      color:'white',
      textTransform:'uppercase',
      // font-family: 'Libre Baskerville', serif;
     fontFamily: `'Libre Baskerville', serif`

    },
    img:{
     transform:'translateY(0px)',
     left:'0px',
     width:'100%'

    },
    rod:{
      color:'goldenrod'
    }

     
  }));
const SingleCart = ({poster_path,title,release_date,id,name,first_air_date,media_type,vote_average}) => {
   
    const classes=useStyles();
    console.log()
    return (
      <>
    
      
    <Grid item xs={12} sm={4} md={3}  >

         <ContentModal media_type={media_type} id={id}>
         <GridListTile key={id}>
         
             <img className={classes.img}  src={poster_path?`${img_300}/${poster_path}`:noPicture} alt={title}/>
             <GridListTileBar
                title={title||name}
                subtitle={<span>Release Date:{ release_date||first_air_date}</span>}
                actionIcon={
                  
                    <IconButton aria-label={`info about ${title}`} className={classes.icon}>
                    
                      <span className={classes.span}>{`${vote_average}/10`}</span>
                    <Star className={classes.rod}/>

                  </IconButton>
                }
             >

             </GridListTileBar>

         </GridListTile>
         </ContentModal>
         </Grid>
         </>
    )
}

export default SingleCart
