import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { windows } from 'constants/windows';

const useStyle = makeStyles({
  Container: {
    width: 260,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#ffffff',
    borderRadius: 8,
  },
  Wrapper: { padding: 16 },
  Title: {
    fontSize: 14,
    marginBottom: 6,
  },
  Description: { fontSize: 12 },
  Footer: {
    padding: '8px 12px',
    fontSize: 12,
  },
});

interface Props {
  windowIndex: number;
}

const MetadataBox: React.FC<Props> = ({ windowIndex = 0 }) => {
  const classes = useStyle();
  const { location, author } = windows[windowIndex];

  return (
    <Grid container item direction='column' className={classes.Container}>
      <Grid container item direction='column' className={classes.Wrapper}>
        <Grid item className={classes.Title}>
          {author}&apos;s window.
        </Grid>
        <Grid container item className={classes.Description}>
          <b>{location}</b>
        </Grid>
      </Grid>
      <Grid container justify='flex-end' className={classes.Footer}>
        <a href='https://window-swap.com/window' target='__blank'>window-swap.com</a>
      </Grid>
    </Grid>
  );
};

export default MetadataBox;
