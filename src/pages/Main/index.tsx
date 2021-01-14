import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

import ExploreButton from 'components/ExploreButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { HOST_URL } from 'constants/env';
import { windows } from 'constants/windows';

const useStyle = makeStyles({
  Player: {
    position: 'fixed',
    top: 0,
    zIndex: -1,
  },
});

const Main: React.FC = () => {
  const classes = useStyle();
  const pickIndex = (): number => Math.floor(Math.random() * Math.floor(windows.length - 1));
  const [windowIndex, setWindowIndex] = useState<number>(pickIndex());
  const changeWindow = () => setWindowIndex(pickIndex());

  return (
    <>
      <Header>
        <Grid item />
        <Typography variant='body1'>
          For you.
        </Typography>
        <Grid item />
      </Header>
      <ReactPlayer
        url={`${HOST_URL}/video/${windows[windowIndex].windowId}`}
        playing
        onEnded={changeWindow}
        width='100vw'
        height='100vh'
        className={classes.Player}
      />
      <Footer>
        <Grid item />
        <ExploreButton onClick={changeWindow} />
        <Grid item />
      </Footer>
    </>
  );
};

export default Main;
