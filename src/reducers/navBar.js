import { ACTION } from '../mylib/constant';

export const defaultSelected = {
  page: 'dashboard',
};

export const SelectedReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SECLECTED_ITEM:
      return action.data;
    default:
      return state;
  }
};
