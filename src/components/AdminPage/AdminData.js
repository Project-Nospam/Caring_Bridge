import React, { Component } from 'react';
import { connect } from 'react-redux';
import {USER_ACTIONS} from '../../redux/actions/userActions';



const mapStateToProps = state => ({
  user: state.user,
});

class AdminData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deactivate: false, 
    }
  }
    componentDidMount() {
    this.props.dispatch({
        type: USER_ACTIONS.FETCH_USER
    });
    this.props.dispatch({
        type: 'ALL_USERS'
    });
  }

    handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
        this.setState({
            deactivate: true,
        })
    }
// Admin Table data goes here
  render() {
    {this.props.user.username}
    return (
      <div>
        <h2>Admin Data Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>User Name</th>
                        <th>Is Admin</th>
                        <th>Is Active</th>
                        <th>ID</th>
                    </tr>
                    {this.props.user.allUsers.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.username}</td>
                                <td>{user.is_admin.toString()}</td>
                                <td>{user.is_active.toString()}</td>
                                <td>{user._id.toString()}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
  }
}


export default connect(mapStateToProps)(AdminData);
