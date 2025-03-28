import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
      nodata: '#f0f0f0',
    },
    primary: {
      contrastText: '#FFFFFF',
      main: '#2E4150',
      icons: '#FFFFFF',
    },
    button: {
      negative: '#FFFFFF',
      positive: '#5AAAFF',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
      nodata: '#C9C9C9'
    },
    action: {
      selected: '#E7A615',
      hover: '#FFD371',
      disabled: '#9B9B9B',
    },
    table: {
      header: '#909090',
      row: '#D8E3EC',
    },
  },
  shadows,
  typography,
});

export default theme;
