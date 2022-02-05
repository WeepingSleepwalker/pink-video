import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import SidePiece from './components/SidePiece';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },

      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}));

export const App = () => {
    const classes = useStyles();
  return (
  <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color= "inherit">
        <Typography variant="h2" align="center">Pink Video</Typography>
      </AppBar>
      <VideoPlayer/>
      <SidePiece>
          <Notifications/>
      </SidePiece>
      {/* Video Player
      Options --> Notifications */}
  </div>
  )};
  export default App;
