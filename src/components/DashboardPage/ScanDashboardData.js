import React, { Component } from 'react';
import { SCAN_ACTIONS } from '../../redux/actions/scanActions';

const mapStateToProps = reduxState => ({
    scanReducer:reduxState.scanReducer
});
class ScanDashboardData extends Component {
    componentDidMount() {
        this.props.dispatch({ type: SCAN_ACTIONS.FETCH_SCAN});
    }
    render() {
    
    return (
      <div>
          Sites Scanned : {this.props.scanReducer.length}
          <br />
          {/* need to import variable name for lastscan  */}
          Last Scan Run : {this.props.scanReducer.lastScan}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ScanDashboardData);
