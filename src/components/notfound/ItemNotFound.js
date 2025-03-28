import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  notFound: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.nodata,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.nodata,
    textTransform: 'uppercase',
    padding: theme.spacing(2),
    borderRadius: '10px',
  },
}));

const ItemNotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <img
        // eslint-disable-next-line no-undef
        src={process.env.PUBLIC_URL + '/no-data-icon.png'}
      />
      <Typography variant="h3">item not found</Typography>
    </div>
  );
};
export default ItemNotFound;
