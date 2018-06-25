import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class SiteView extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
      // fetch site action data
    });
  }

 
  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h2>Site View</h2>
          {/* insert siteData here ex. <SiteView/> */}
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}


export default connect(mapStateToProps)(SiteView);

