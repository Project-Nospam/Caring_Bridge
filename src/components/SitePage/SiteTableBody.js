import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SITE_ACTIONS } from '../../redux/actions/siteActions';

import SiteTableHeader from '../SitePage/SiteTableHeader';
import SiteButtons from '../SitePage/SiteButtons';

import Moment from 'react-moment';
import {
  withStyles, Table, TableBody,
  TableCell, TableHead, TablePagination,
  TableRow, TableSortLabel, Toolbar, Typography,
  Paper, IconButton, Tooltip, 
  DeleteIcon, FilterListIcon
} from '@material-ui/core';

const mapStateToProps = reduxState => ({
  siteReducer: reduxState.siteReducer
});

class SiteTableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'site',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5,
      deactivate: false,

    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: SITE_ACTIONS.FETCH_SITE
    });
    this.props.dispatch({
      type: 'ALL_SITES'
    });
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
    this.setState({
      deactivate: true,
    })
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const data = this.props.siteReducer.allSites
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    
    function getSorting(order, orderBy) {
      return order === 'desc'
        ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
        : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
    }

    return (
      <Paper>
        <div>
          <Table aria-labelledby="tableTitle">
            <SiteTableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell scope="row" padding="none">
                        <SiteButtons site={data} buttonLabel="Review"/>
                      </TableCell>
                      <TableCell numeric><Moment format="LL">{data.createdAt}</Moment></TableCell>
                      <TableCell>{data.user.firstName} {data.user.lastName}</TableCell>
                      <TableCell numeric>{data.status.userId.toString()}</TableCell>
                      {/* <TableCell numeric>Email goes here</TableCell> */}
                      <TableCell numeric><Moment format="LL">{data.user.email.createdAt}</Moment></TableCell>
                      <TableCell >{data.audit_data.reason.toString()}</TableCell>
                      {console.log('data:',data)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default connect(mapStateToProps)(SiteTableBody);