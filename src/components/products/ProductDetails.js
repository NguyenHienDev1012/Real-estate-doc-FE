import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import productApi from '../../api/apiUtils/productApi';
import TextField from '@material-ui/core/TextField';

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
  line: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const ProductDetails = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [product, setProduct] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseProduct = await productApi.getOne(id);
        if (responseProduct) {
          setProduct(responseProduct);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className={classes.content}>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {product !== undefined && (
                <Paper className={fixedHeightPaper}>
                  <Typography variant="h2">id</Typography>
                  <Divider className={classes.line} />
                  {product !== undefined &&
                    Object.keys(product).map((key) => (
                      <Form key={key}>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                          <Form.Label column sm="3">
                            {key}
                          </Form.Label>
                          <Col sm="9">
                           
                            <TextField
                              variant="outlined"
                              size="small"
                              defaultValue={product[key]}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                          </Col>
                        </Form.Group>
                      </Form>
                    ))}
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
export default ProductDetails;
