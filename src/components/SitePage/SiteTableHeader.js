import React, { Component } from 'react';
import {
  withStyles, Table, TableBody,
  TableCell, TableHead, TablePagination,
  TableRow, TableSortLabel, Toolbar, Typography,
  Paper, IconButton, Tooltip,
  DeleteIcon, FilterListIcon
} from '@material-ui/core';

const columnHeader = [
  { id: 'site', numeric: false, disablePadding: true, label: 'Site' },
  { id: 'createdAt', numeric: true, disablePadding: false, label: 'Created' },
  { id: 'user', numeric: false, disablePadding: true, label: 'User' },
  { id: '_id', numeric: true, disablePadding: false, label: 'User ID' },
  { id: 'email', numeric: false, disablePadding: true, label: 'User Email' },
  { id: 'createdAt', numeric: true, disablePadding: false, label: 'User Created' },
  { id: 'reasons', numeric: false, disablePadding: true, label: 'Reasons' },
];

class SiteTableHeader extends Component {

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    function getSorting(order, orderBy) {
      return order === 'desc'
        ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
        : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
    }

    const { order, orderBy } = this.props;

    return (
      <div>
        <Paper >
        <TableHead>
          <TableRow>
            {columnHeader.map(data => {
              return (
                <TableCell
                  key={data.id}
                  numeric={data.numeric}
                  padding={data.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === data.id ? order : false}
                >
                  <Tooltip
                    title="Sort"
                    placement={data.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === data.id}
                      direction={order}
                      onClick={this.createSortHandler(data.id)}
                    >
                      {data.label}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              );
            }, this)}
          </TableRow>
        </TableHead>
        </Paper>
      </div>
    );
  }
}


export default SiteTableHeader;