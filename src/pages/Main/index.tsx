import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

import ExploreButton from 'components/ExploreButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Logo from 'components/Logo';
import MetadataBox from 'components/MetadataBox';
import TopSitesList from 'components/TopSitesList';
import { HOST_URL } from 'constants/env';
import { windows } from 'constants/windows';

const useStyle = makeStyles({
  Player: {
    position: 'fixed',
    top: 0,
    zIndex: -1,
  },
  Container: {
    padding: 24,
    width: '100vw',
    height: '100vh',
  },
  Link: {
    width: 240,
    fontSize: 12,
  },
  Right: { textAlign: 'right' },
});

const Main: React.FC = () => {
  const classes = useStyle();
  const pickIndex = (): number => Math.floor(Math.random() * Math.floor(windows.length - 1));
  const [windowIndex, setWindowIndex] = useState<number>(pickIndex());
  const changeWindow = () => setWindowIndex(pickIndex());

  return (
    <>

      <ReactPlayer
        url={`${HOST_URL}/video/${windows[windowIndex].windowId}`}
        playing
        onEnded={changeWindow}
        width='100vw'
        height='100vh'
        className={classes.Player}
      />
      <Grid container wrap='nowrap' direction='column' justify='space-between' className={classes.Container}>
        <Header>
          <MetadataBox windowIndex={windowIndex} />
          <Logo />
          <TopSitesList />
        </Header>
        <Footer>
          <Grid item className={classes.Link}>
            <a href='https://window-swap.com/window' target='__blank'>window-swap.com</a>
          </Grid>
          <ExploreButton onClick={changeWindow} />
          <Grid item className={[classes.Link, classes.Right].join(' ')} justify='flex-end'>
            <a href='https://github.com/purelledhand/for-you' target='__blank'>github</a>
          </Grid>
        </Footer>
      </Grid>
    </>
  );
};

export default Main;
