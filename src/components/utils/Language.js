import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    width: 150,
    '& .MuiOutlinedInput-input': {
      color: theme.palette.primary.icons,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.primary.icons,
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.icons,
    },
    '&:hover .MuiOutlinedInput-input': {
      color: theme.palette.primary.icons,
    },
    '&:hover .MuiInputLabel-root': {
      color: theme.palette.primary.icons,
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.icons,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: theme.palette.primary.icons,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.icons,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.icons,
    },
  },
  icon: {
    fill: theme.palette.primary.icons,
  },
  iconItem: {
    height: '18px',
    width: '18px',
  },
  listItemIcon: {
    minWidth: '30px',
  },
}));

const Language = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        
        <MenuItem value={'en'}>
          <div style={{ display: 'flex', alignItems: 'center', height: 25 }}>
            <ListItemIcon className={classes.listItemIcon}>
            </ListItemIcon>
            <ListItemText primary= 'Language' />
          </div>
        </MenuItem>
      </FormControl>
    </div>
  );
};
export default Language;
