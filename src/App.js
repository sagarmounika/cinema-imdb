import React, { useState, useEffect } from 'react';
import Movie from './Components/Movies/Movie';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// APIS
const Movies_api =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9a64a0bba681a780b3ad2dcbce76ea5c&page';

const Search_api =
  'https://api.themoviedb.org/3/search/movie?&api_key=9a64a0bba681a780b3ad2dcbce76ea5c&query=';

function App() {
  const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,

      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  const [Movies, setMovies] = useState([]);
  // Movies
  useEffect(() => {
    fetch(Movies_api)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setMovies(data.results);
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState('');

  // SEARCH
  const changeHandler = e => {
    setSearchTerm(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (searchTerm) {
      fetch(Search_api + searchTerm)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
      setSearchTerm('');
    }
  };
  return (
    <main className={classes.content}>
      <form onSubmit={submitHandler}>
        <input
          className='search'
          value={searchTerm}
          type='text'
          placeholder='Search'
          onChange={changeHandler}
        />
      </form>
      <div className={classes.toolbar} />

      <Grid container direction='row' justify='space-around' spacing={3}>
        {Movies.length > 0 &&
          Movies.map(movie => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={movie.id}>
              <Movie {...movie} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
}

export default App;
