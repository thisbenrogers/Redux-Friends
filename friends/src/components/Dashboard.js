import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="wrapper">
        <p>Friends App!</p>
      </div >
    )
  }
}

const mapStateToProps = ({ error, someData, fetchingData }) => ({
  error,
  someData,
  fetchingData
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Dashboard)
);