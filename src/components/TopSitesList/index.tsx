import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Site } from 'utils/types';

const useStyle = makeStyles({
  Container: {
    width: 200,
    padding: 16,
    backgroundColor: 'transparent',
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

const TopSitesList: React.FC = () => {
  const classes = useStyle();
  const [topSites, setTopSites] = useState<Site[]>([]);

  useEffect(() => {
    chrome?.topSites?.get(setTopSites);
  }, []);

  return (
    <Grid container item direction='column' alignItems='flex-end' className={classes.Container}>
      <Grid item className={classes.Title}>
        Wish cache hit <b>for you.</b>
      </Grid>
      <Grid container item direction='column' alignItems='flex-end' className={classes.Description}>
        <ul>
          {topSites.map(({ url, title }, index) => (
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
