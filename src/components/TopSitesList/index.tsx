import React, { useEffect, useState } from 'react';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Site } from 'utils/types';

const useStyle = makeStyles({
  Container: {
    width: 240,
    padding: 16,
    backgroundColor: 'transparent',
    color: '#ffffff',
    borderRadius: 8,
  },
  Title: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontSize: 14,
    marginBottom: 12,
    padding: '0 8px',
    height: 36,
    borderRadius: 30,
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
  },
  Description: {
    fontSize: 12,
    lineHeight: 1.5,
    '& ul, ol': { padding: 0 },
  },
});

const TopSitesList: React.FC = () => {
  const classes = useStyle();
  const [show, setShow] = useState<boolean>(true);
  const [topSites, setTopSites] = useState<Site[]>([]);

  useEffect(() => {
    chrome?.topSites?.get(setTopSites);
  }, []);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <Grid container item direction='column' alignItems='flex-start' className={classes.Container}>
      <Button onClick={toggleShow} className={classes.Title}>
        Wish cache hit&nbsp;<b>for you.</b>
      </Button>
      <Grid container item direction='column' alignItems='flex-start' className={classes.Description}>
        <ul>
          {show && topSites.map(({ url, title }, index) => (
            <ol>
              {index + 1}.
              <a href={url}>
                {title}
              </a>
            </ol>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default TopSitesList;
