import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import SiteData from './SiteData';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';

import SiteLastThree from './SiteLastThree';




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

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <SiteData />
          <SiteLastThree />
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Nav />
        { content }
      </div>
    );
   
  }
}


export default connect(mapStateToProps)(SiteView);

