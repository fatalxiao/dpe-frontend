import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';

import 'scss/containers/app/modules/addPatient/patientInformation/PatientInformation.scss';

class PatientInformation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="patient-information">
                <CustomizedMaterialTextField label="Patient Name"/>
            </div>
        );
    }
}

PatientInformation.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation);