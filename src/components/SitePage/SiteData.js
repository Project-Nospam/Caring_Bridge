import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  site: state.site,
});
class SiteData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deactivate: false,
    } 
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_SITE'
    })
  }

  handleClickForDeactivate = () => {
    console.log('Deactivate button click ');
      this.setState({ 
        deactivate: true,
    }) 
  }

  render() {
    { this.props.site }
    return (
      <div>
          <h2>SiteData</h2>
        <table>
          <tbody>
            <tr>
              <th>Site</th>
              <th>Site ID</th>
              <th>Created</th>
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
              <td></td>
              <td></td>
              <td></td>
              </tr>
          </tbody>
        </table>
        <h2>Last Three Sites Processed</h2>
        <table>
          <tbody>
            <tr>
              <th>Site</th>
              <th>Site ID</th>
              <th>Created</th>
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
              <td></td>
              <td></td>
              <td></td>
              </tr>
          </tbody>
        </table>
        {<pre>{JSON.stringify(this.props.site)}</pre>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SiteData);