import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Container: {
    position: 'fixed',
    bottom: 0,
    marginBottom: 24,
  },
});

const Footer: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid container direction='row' justify='space-between' alignItems='center' className={classes.Container}>
      { children }
    </Grid>
  );
};

export default Footer;
