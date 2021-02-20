import { makeStyles } from '@material-ui/core/styles';

  
export default makeStyles((theme) => ({
  root: {
    maxWidth: '250',
   
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));