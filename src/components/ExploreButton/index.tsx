import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  ExploreButton: {
    padding: '8px 24px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: '#ffffff',
    height: 48,
    borderRadius: 32,
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
  },
});

interface Props {
  onClick: () => void;
}

const ExploreButton: React.FC<Props> = ({ onClick }) => {
  const classes = useStyle();

  return (
    <Button onClick={onClick} className={classes.ExploreButton}>
      Explore other one.
    </Button>
  );
};

export default ExploreButton;
