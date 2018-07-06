import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileTableBody from './SiteTableBody';


const mapStateToProps = state => ({
  profile: state.profile,
});

class ProfileData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deactivate: false,
    } 
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PROFILE'
    })
  }

  handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
      this.setState({ 
        deactivate: true,
    }) 
  }

  render() {
    
    return (
      <div>
        <h2>Last Three Profiles Processed</h2>
        <ProfileTableBody />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfileData);