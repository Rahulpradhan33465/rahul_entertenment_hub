import React from 'react';

import Carousel from '../Carousel/Carousel'
import { unavailable,img_500, unavailableLandscape } from '../../Data/data';
import { Button} from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube';

 

export default function DetailCard({backdrop_path,video,title,name,release_date,first_air_date,id,media_type,overview,poster_path}) {
 
// console.log(video);
  return (
    
    <div className="ContentModal">
                <img
                  src={
                    poster_path
                      ? `${img_500}/${poster_path}`
                      : unavailable
                  }
                  alt={name || title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    backdrop_path
                      ? `${img_500}/${backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={name || title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {name || title} (
                    {(
                      first_air_date ||
                      release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {/* {tagline && (
                    <i className="tagline">{tagline}</i>
                  )} */}

                  <span className="ContentModal__description">
                    {overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                  size='small'
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
  );
}
