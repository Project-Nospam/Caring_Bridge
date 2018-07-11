import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiteButtons from '../SitePage/SiteButtons';

import Moment from 'react-moment';
import {
  Table, TableBody, TableCell,
  TableHead, TableRow, Paper
} from '@material-ui/core';



const mapStateToProps = reduxState => ({
  siteReducer: reduxState.siteReducer
});

class LastThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deactivate: false,
    }
  }

  handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
    this.setState({
      deactivate: true,
    })
  }

  render() {


    const siteData = this.props.siteReducer.recentThreeSites


    return (
      <div>
        <h2>Recently Processed</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reviewed Site</TableCell>
                <TableCell>Flagged</TableCell>
                <TableCell>Site Created</TableCell>
                <TableCell>User</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>User Created</TableCell>
                <TableCell>Reasons Flagged</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { siteData.map((data, i) => {
                  return (
                    <TableRow key={i}>
                    <TableCell scope="row" padding="none">

                      <SiteButtons site={data} buttonLabel="Edit"/>

                    </TableCell>
                    <TableCell>{data.marked.toString()}</TableCell>
                    <TableCell numeric><Moment format="LL">{data.createdAt}</Moment></TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell numeric>{data.status.userId.toString()}</TableCell>
                    <TableCell numeric><Moment format="LL">{data.createdAt}</Moment></TableCell>
                    <TableCell >{data.audit_data.reason.toString()}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}


export default connect(mapStateToProps)(LastThree);