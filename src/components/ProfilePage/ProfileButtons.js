import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import {connect} from 'react-redux';

class ProfileButtons extends Component {


  // this component needs the profile info passed to it as a prop
  handleClick = () => {
    this.props.dispatch({
      type: 'APPROVAL_ITEM',
      payload: {
        type: 'profile',
        item: this.props.profile,
      }
    });
    this.props.history.push('/approval');
  }

  render() {

    return (
      <div>
        <Button onClick={this.handleClick}>Review</Button>

      </div>
    );
  }
}


export default connect()(ProfileButtons);
