import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import productApi from '../../api/apiUtils/productApi';
import TableProduct from './TableProduct';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, TablePagination } from '@material-ui/core';
import queryString from 'query-string';
import ItemNotFound from '../notfound/ItemNotFound';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    backgroundColor: fade(theme.palette.common.white, 0.5),
  },
  table: {
    minWidth: 150,
  },
  line: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  },
  notFound: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.nodata,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: '10px',
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxHeight: '50px',
    maxWidth: '50%',
  },
}));
const Products = () => {
  const classes = useStyles();
  const history = useHistory();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [products, setProducts] = useState();
  const location = useLocation();
  const [valueSearch, setValueSearch] = useState('');
  const [pageSearch, setPageSearch] = useState(0);
  const [page, setPage] = useState(
    queryString.parse(location.search).page !== undefined
      ? queryString.parse(location.search).page - 1
      : 0
  );
  const [rowsPerPage, setRowsPerPage] = useState(
    queryString.parse(location.search).rows_per_page !== undefined
      ? Number(queryString.parse(location.search).rows_per_page)
      : 10
  );

  const handleChangePage = (event, newPage) => {
    if (valueSearch === '') {
      setPage(newPage);
      history.replace(`?page=${newPage + 1}&rows_per_page=${rowsPerPage}`);
    } else {setPageSearch(newPage);}
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    history.replace(
      `/manager/product/?page=${1}&rows_per_page=${event.target.value}`
    );
  };

  const handleSearch = (event) => {
    setValueSearch(event.currentTarget.value);
    setPageSearch(0);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseProducts = await productApi.getAll();
        if (responseProducts.data) {
          setProducts(responseProducts.data);
          setPageSearch(0);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (valueSearch === '') {
      fetchProducts();
    } else {
      // fetchProducts();
    }
  }, [page, rowsPerPage, valueSearch, pageSearch]);

  return (
    <div className={classes.content}>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {products !== undefined && (
                <Paper className={fixedHeightPaper}>
                  <div className={classes.title}>
                    <Typography variant="h2">Products</Typography>
                    <div className={classes.filter}>
                      <TextField
                        type="search"
                        variant="outlined"
                        size="small"
                        onChange={handleSearch}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <Divider className={classes.line} />
                  {products !== null  ? (
                    <div>
                      <TableProduct products={products} />
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        rowsPerPage={rowsPerPage}
                        page={valueSearch === '' ? page : pageSearch}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                      />
                    </div>
                  ) : (
                    <div className={classes.notFound}>
                      <ItemNotFound />
                      {valueSearch === '' && (
                        <Button
                          variant="outlined"
                          onClick={() => {
                            setPage(products.totalPages - 1);
                          }}
                        >
                        </Button>
                      )}
                    </div>
                  )}
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
export default Products;
