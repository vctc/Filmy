import './App.css';
import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './components';
import useStyles from './components/styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id" component={MovieInformation} />
          <Route exact path="/actors/:id" component={Actors} />
          <Route exact path="/" component={Movies} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
