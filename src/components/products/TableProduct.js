import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { StyledTableCell, StyledTableRow } from '../utils/Table';
import { LightTooltip } from '../utils/CustomTooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import productApi from '../../api/apiUtils/productApi';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 150,
  },
  button: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  },
}));

const TableProduct = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [flag, setFlag] = useState(true);
  const { products } = props;
  const [idProductConfirm, setIdProductConfirm] = useState(false);
  const [idProductConfirmEdit, setidProductConfirmEdit] = useState(false);

  useEffect(() => {
    const fetchUpdateProduct = async () => {
      const responsEdit = await productApi.updatedProduct(idProductConfirm);
      if (responsEdit) {
        enqueueSnackbar('Edited successfully', {
          variant: 'success',
        });
        setFlag(!flag);
      }
    };
    fetchUpdateProduct();
  }, [idProductConfirmEdit]);

  useEffect(() => {
    const fetchDeleteContract = async () => {
      const responseunDelete = await productApi.delete(idProductConfirm);
      if (responseunDelete) {
        enqueueSnackbar('Deleted successfully', {
          variant: 'success',
        });
        setFlag(!flag);
      }
    };
    fetchDeleteContract();
  }, [idProductConfirm]);


  const handleTableRowDeleteClick = (event) => {
    setIdProductConfirm(parseInt(event.currentTarget.id, 10));
  };

  const handleTableRowEditClick = (event) => {
    setidProductConfirmEdit(parseInt(event.currentTarget.id, 10));
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="customized table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="left">
            </StyledTableCell>
            <StyledTableCell align="left">
            </StyledTableCell>
            <StyledTableCell align="left">
            </StyledTableCell>
            <StyledTableCell align="center">
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.category}
              </StyledTableCell>
              <StyledTableCell align="left">
                {product.description}
              </StyledTableCell>
              <StyledTableCell align="left">{product.price}</StyledTableCell>
              <StyledTableCell align="center">
                <LightTooltip
                  placement="bottom"
                >
                  <Button
                    className={classes.button}
                    size="small"
                    id={product.id}
                    onClick={handleTableRowEditClick}
                  >
                    <ListAltIcon />
                  </Button>
                </LightTooltip>

                <LightTooltip
                  title= 'delete'
                  placement="bottom"
                >
                  <Button
                    data-tip="Delete"
                    className={classes.button}
                    size="small"
                    id={product.id}
                    onClick={handleTableRowDeleteClick}
                  >
                    <DeleteIcon/>
                  </Button>
                </LightTooltip>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableProduct;
