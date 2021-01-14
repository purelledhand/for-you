import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

import { windows } from 'constants/windows';

const useStyle = makeStyles({
  Container: {
    width: 280,
    marginRight: 24,
    marginTop: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    borderRadius: 8,
  },
  Wrapper: { padding: 24 },
  Title: {
    fontSize: '1em',
    marginBottom: 12,
  },
  Description: { fontSize: 14 },
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
          <LocationOnRoundedIcon fontSize='small' />
          &nbsp;{location}
        </Grid>
      </Grid>
      <Grid container justify='flex-end' className={classes.Footer}>
        window-swap.com
      </Grid>
    </Grid>
  );
};

export default MetadataBox;
