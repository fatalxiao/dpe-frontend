import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import FieldSet from 'components/FieldSet';
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

                <FieldSet>
                    <CustomizedMaterialDropdownSelect label="Group"/>
                    <CustomizedMaterialTextField label="Patient Name"/>
                    <CustomizedMaterialTextField label="ID"/>
                </FieldSet>

                <FieldSet>
                    <CustomizedMaterialTextField label="Age"/>
                    <CustomizedMaterialTextField label="Gestational Days"/>
                    <CustomizedMaterialTextField label="Height"/>
                    <CustomizedMaterialTextField label="Weight"/>
                </FieldSet>

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