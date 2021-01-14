import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Container: {
    width: '100vw',
    padding: 24,
  },
});

const Header: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      justify='space-between'
      alignItems='flex-start'
      className={classes.Container}
    >
      { children }
    </Grid>
  );
};

export default Header;
