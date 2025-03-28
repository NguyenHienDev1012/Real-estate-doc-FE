import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  depositContext: {
    flex: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  title: {
    textTransform: 'uppercase',
  },
  numOb: {
    marginTop: theme.spacing(2),
    textAlign: 'right',
    color: 'green',
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
export default Dashboard;
