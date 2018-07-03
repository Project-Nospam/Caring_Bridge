import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});

class ProfileData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markSafe: false,
    }
  }

  handleClickForMarkSafe = () => {
    console.log('Mark Safe button clicked');
    this.setState({
      markSafe: true,
    });
  }

  render() {
    
    return (
      <div>
          <h2>Profile Data</h2>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <th>User ID</th>
              <th>User Email</th>
              <th>User Created</th>
              <th>Reasons</th>
            </tr>
              <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h2>Last Three Profiles Processed</h2>
        <table>
          <tbody>
            <tr>
              <th>User</th>
              <th>User ID</th>
              <th>User Email</th>
              <th>User Created</th>
              <th>Reasons</th>
            </tr>
              <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProfileData);