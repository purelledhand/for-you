import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({ Container: { width: '100%' } });

const Footer: React.FC = ({ children }) => {
  const classes = useStyle();

  return (
    <Grid container direction='row' justify='space-between' alignItems='center' className={classes.Container}>
      { children }
    </Grid>
  );
};

export default Footer;
