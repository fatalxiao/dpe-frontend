import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';

import 'scss/containers/app/nav/patients/Patients.scss';

class Patients extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="patients">

                <FlatButton className="all-patients-button"
                            value="All Patients"
                            iconCls="fa fa-align-left"/>

            </div>
        );
    }
}

Patients.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);