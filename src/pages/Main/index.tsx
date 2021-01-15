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
});

const Main: React.FC = () => {
  const classes = useStyle();
  const pickIndex = (): number => Math.floor(Math.random() * Math.floor(windows.length - 1));
  const [windowIndex, setWindowIndex] = useState<number>(pickIndex());
  const changeWindow = () => setWindowIndex(pickIndex());

  return (
    <>
      <Header>
        <MetadataBox windowIndex={windowIndex} />
        <Logo />
        <TopSitesList />
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
        {
          // TODO: Add EntryLink Feature
        }
        <Grid item />
        <ExploreButton onClick={changeWindow} />
        {
          // TODO: Add Mute Button
        }
        <Grid item />
      </Footer>
    </>
  );
};

export default Main;
