import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import DetailCard from '../DetailCard/DetailCard'
 


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {

    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
    width: '90%',
    height: '80%',
    backgroundColor: '#39445a',
    border: '1px solid #282c34',
    borderRadious: 10,
    color: 'white',
    overflow:'hidden',

  },
}));

export default function ContentModal({ children, media_type, id }) {
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchDetails = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setContent(data);
  }

  const fetchVideo = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setVideo(data.results[0]?.key)
  }

  useEffect(() => {
    fetchDetails();
    fetchVideo();

  }, [])
  // console.log(content);
  return (
    <div>
      <div type="button" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {
              content &&   <DetailCard {...content} video={video} media_type={media_type} />
            }
          
           
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
