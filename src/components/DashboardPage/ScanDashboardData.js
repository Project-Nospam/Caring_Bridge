import React, { Component } from 'react';
import { connect } from "react-redux";
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';
import moment from 'moment';

const mapStateToProps = reduxState => ({
  scanReducer: reduxState.scanReducer
});
class ScanDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: SCAN_ACTIONS.FETCH_SCAN});
    }
    render() {
      const date = this.props.scanReducer.scanInfo.lastScannedDate
      const dateFormat = moment(date).format('MM/DD LT');
      
    return ( 
      <div>
        Site Scanned :{JSON.stringify(this.props.scanReducer.scanInfo.sitesScanned)}
        <br />
        Last Scan Run : {dateFormat}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ScanDashboardData);
