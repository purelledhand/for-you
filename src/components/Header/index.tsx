import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Container: {
    width: '100vw',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

const Header: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid container direction='row' justify='space-between' alignItems='center' className={classes.Container}>
      { children }
    </Grid>
  );
};

export default Header;
