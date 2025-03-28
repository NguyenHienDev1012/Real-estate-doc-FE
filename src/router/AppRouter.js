import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import ManagerPage from '../containers/ManagerPage';
import AppContext from '../store/AppContext';
import { SelectedReducer, defaultSelected } from '../reducers/navBar';
import { ACTION } from '../mylib/constant';

const AppRoute = () => {
  const [navBar, dispatchNavBar] = useReducer(SelectedReducer, defaultSelected);

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

  return (
    <AppContext.Provider value={{ navBar, dispatchNavBar }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <div className="App">
            <Switch>
              <Route component={ManagerPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};
export default AppRoute;
