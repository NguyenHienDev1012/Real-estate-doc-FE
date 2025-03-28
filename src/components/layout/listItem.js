import React, { useState, useEffect, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AppContext from '../../store/AppContext';
import { ACTION } from '../../mylib/constant';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  icons: {
    color: theme.palette.primary.icons,
  },
  item: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  },
}));
const MainListItems = () => {
  const classes = useStyles();
  const { navBar, dispatchNavBar } = useContext(AppContext);
  const [selectedIndex, setSelectedIndex] = useState(navBar.page);
  const history = useHistory();

  const handleListItemClick = (event, index) => {
    dispatchNavBar({
      type: ACTION.SECLECTED_ITEM,
      data: { page: index },
    });
    history.push(`/manager/${index}`);
  };
  
  useEffect(() => {
    const url = window.location.pathname.split('/')[2];
    if (url === undefined) {
      dispatchNavBar({
        type: ACTION.SECLECTED_ITEM,
        data: { page: 'dashboard' },
      });

    } else {
      dispatchNavBar({
        type: ACTION.SECLECTED_ITEM,
        data: { page: url },
      });
    }
  }, []);

  useEffect(() => {
    setSelectedIndex(navBar.page);
   
  }, [history, navBar]);
  return (
    <div className={classes.root}>
      <List>
        <ListItem
          className={classes.item}
          button
          selected={selectedIndex === 'dashboard'}
          onClick={(event) => handleListItemClick(event, 'dashboard')}
        >
          <ListItemIcon>
            <DashboardIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary= 'Dashboard' />
        </ListItem>
        <ListItem
          className={classes.item}
          button
          selected={selectedIndex === 'contract'}
          onClick={(event) => handleListItemClick(event, 'contract')}
        >
        </ListItem>
        <ListItem
          className={classes.item}
          button
          selected={selectedIndex === 'product'}
          onClick={(event) => handleListItemClick(event, 'product')}
          //component={Link}
        >
          <ListItemIcon>
            <ShoppingBasketOutlinedIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary='Product' />
        </ListItem>
        <ListItem
          className={classes.item}
          button
          selected={selectedIndex === 'account'}
          onClick={(event) => handleListItemClick(event, 'account')}
        >
          <ListItemIcon>
            <PeopleIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary= 'Account' />
        </ListItem>
        <ListItem
          className={classes.item}
          button
          selected={selectedIndex === 'integration'}
          onClick={(event) => handleListItemClick(event, 'integration')}
          // component={Link}
        >
          <ListItemIcon>
            <LayersIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary='Setting' />
        </ListItem>
      </List>
    </div>
  );
};

export default MainListItems;
