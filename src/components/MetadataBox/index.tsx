import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { windows } from 'constants/windows';

const useStyle = makeStyles({
  Container: {
    width: 240,
    padding: 16,
    backgroundColor: 'transparent',
    color: '#ffffff',
    borderRadius: 8,
  },
  Title: {
    fontSize: 14,
    marginBottom: 6,
  },
  Description: { fontSize: 12 },
});

interface Props {
  windowIndex: number;
}

const MetadataBox: React.FC<Props> = ({ windowIndex = 0 }) => {
  const classes = useStyle();
  const { location, author } = windows[windowIndex];

  return (
    <Grid container item direction='column' className={classes.Container}>
      <Grid item className={classes.Title}>
        {author}&apos;s window.
      </Grid>
      <Grid container item className={classes.Description}>
        <b>{location}</b>
      </Grid>
    </Grid>
  );
};

export default MetadataBox;
