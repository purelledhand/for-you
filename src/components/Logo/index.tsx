import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Wrapper: { width: 200 },
  Time: {
    fontSize: '1em',
    marginBottom: 20,
    color: '#ffffff',
  },
  Title: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 8,
  },
});

const Logo: React.FC = () => {
  const classes = useStyle();

  return (
    <Grid container item direction='column' alignItems='center' className={classes.Wrapper}>
      <Grid item className={classes.Title}>
        Relaxing air <b>for you.</b>
      </Grid>
    </Grid>
  );
};

export default Logo;
