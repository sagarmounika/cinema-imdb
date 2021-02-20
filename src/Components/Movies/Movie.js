import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import clsx from 'clsx';
import { yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

const Movie = ({ title, poster_path, vote_average, overview }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const Images_api = 'https://image.tmdb.org/t/p/w300';
  return (
    <div className='movie'>
      <Card
        className={classes.root}
        className='card'
        borderRadius={16}
        borderColor='grey.500'
      >
        <img
          className='card-image'
          src={Images_api + poster_path}
          title={title}
          alt="card-image"
        />
        <CardContent className='card-title'>
          <Typography  component='h3'>
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites' className='icon'>
            <FavoriteIcon />
          </IconButton>
          <div className='icon-div'>
            <StarIcon style={{ color: yellow[500] }} />
            <span>{vote_average}</span>
          </div>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon className='icon' />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <p> Description:</p>
            </Typography>
            <Typography paragraph>
              <p>{overview} </p>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Movie;
