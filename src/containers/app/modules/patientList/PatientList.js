import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import PatientListTable from './PatientListTable';

import 'scss/containers/app/modules/patientList/PatientList.scss';

class PatientList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="patient-list">

                <PatientListTable/>

            </div>
        );
    }
}

PatientList.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);