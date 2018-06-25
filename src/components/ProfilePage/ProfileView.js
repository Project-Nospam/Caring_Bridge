import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';

import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
      // fetch profile action data
    });
  }

 
  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h2>Profile View</h2>
          {/* insert profileData here ex. <ProfileView/> */}
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


export default connect(mapStateToProps)(ProfilePage);

