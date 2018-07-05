import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileData from './ProfileData'
import Nav from '../../components/Nav/Nav';
import { PROFILE_ACTIONS } from '../../redux/actions/profileActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
 
});

class ProfileView extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
      // fetch profile action data
    });
  }

  componentDidMount() {
    this.props.dispatch({
      type: PROFILE_ACTIONS.FETCH_PROFILES
    });
  }


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>Profile View</p>
        <ProfileData />
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


export default connect(mapStateToProps)(ProfileView);

