import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';
import CustomizedMaterialDropdownSelect from 'customized/CustomizedMaterialDropdownSelect';

import 'scss/containers/app/modules/addPatient/patientInformation/PatientInformation.scss';

class PatientInformation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="patient-information">

                <form className="patient-information-form">

                    <CustomizedMaterialDropdownSelect label="Group"/>

                    <CustomizedMaterialTextField label="Patient Name"/>
                    <CustomizedMaterialTextField label="ID"/>
                    <CustomizedMaterialTextField label="Age"/>

                    <CustomizedMaterialTextField label="Gestational Days"/>
                    <CustomizedMaterialTextField label="Height"/>
                    <CustomizedMaterialTextField label="Weight"/>

                    <CustomizedMaterialTextField label="Initial Vas Score"/>
                    <CustomizedMaterialTextField label="Cervical Dilation At Time Of EA"/>
                    <CustomizedMaterialTextField label="Heart Rate"/>

                    <CustomizedMaterialTextField label="Systolic Blood Pressure"/>
                    <CustomizedMaterialTextField label="Diastolic Blood Pressure"/>
                    <CustomizedMaterialTextField label="Foetal Heart Rate"/>

                </form>

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