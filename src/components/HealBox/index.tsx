import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  Container: {
    width: 280,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#ffffff',
    borderRadius: 8,
  },
  Title: {
    fontSize: 14,
    marginBottom: 12,
  },
  Description: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const HealBox: React.FC = () => {
  const classes = useStyle();

  return (
    <Grid container item direction='column' className={classes.Container}>
      <Grid item className={classes.Title}>
        Getting refresh things <b>for you.</b>
      </Grid>
      <Grid container item className={classes.Description}>
        1. Drink Hot cocoa tea.<br />
        2. Running out at midnight.<br />
        3. Sleep early.<br />
      </Grid>
    </Grid>
  );
};

export default HealBox;
