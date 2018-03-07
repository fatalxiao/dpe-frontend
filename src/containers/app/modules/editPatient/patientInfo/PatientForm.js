import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Checkbox from 'customized/CustomizedMaterialCheckbox';
import TextField from 'customized/CustomizedMaterialTextField';
import TextArea from 'customized/CustomizedMaterialTextArea';
import FieldSet from 'components/FieldSet';

import Util from 'vendors/Util';

import 'scss/containers/app/modules/editPatient/patientInfo/PatientForm.scss';

const format = Util.formatString;

class PatientForm extends Component {

    constructor(props) {

        super(props);

        this.updateField = ::this.updateField;

    }

    updateField(fieldName, fieldValue) {
        const {updatePatientInfoField} = this.props;
        updatePatientInfoField(fieldName, fieldValue);
    }

    render() {

        const {$form} = this.props;

        return (
            <div className="patient-form">

                <FieldSet title="1. Patient Information">
                    <div className="row">
                        <TextField className="col-3"
                                   label="Age"
                                   value={format($form.age)}
                                   onChange={value => this.updateField('age', value)}/>
                        <TextField className="col-3 gestational-weeks"
                                   label="Gestational Days"
                                   rightIconCls="unit"
                                   value={format($form.gestationalDaysWeeks)}
                                   onChange={value => this.updateField('gestationalDaysWeeks', value)}/>
                        <TextField className="col-3 gestational-days"
                                   label="Gestational Days"
                                   rightIconCls="unit"
                                   value={format($form.gestationalDaysDays)}
                                   onChange={value => this.updateField('gestationalDaysDays', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-3 height"
                                   label="Height"
                                   rightIconCls="unit"
                                   value={format($form.height)}
                                   onChange={value => this.updateField('height', value)}/>
                        <TextField className="col-3 weight"
                                   label="Weight"
                                   rightIconCls="unit"
                                   value={format($form.weight)}
                                   onChange={value => this.updateField('weight', value)}/>
                        <TextField className="col-3"
                                   label="Heart Rate"
                                   value={format($form.heartRate)}
                                   onChange={value => this.updateField('heartRate', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-3"
                                   label="Initial Vas Score"
                                   value={format($form.initialVasScore)}
                                   onChange={value => this.updateField('initialVasScore', value)}/>
                        <TextField className="col-3"
                                   label="Systolic Blood Pressure"
                                   value={format($form.systolicBloodPressure)}
                                   onChange={value => this.updateField('systolicBloodPressure', value)}/>
                        <TextField className="col-3"
                                   label="Diastolic Blood Pressure"
                                   value={format($form.diastolicBloodPressure)}
                                   onChange={value => this.updateField('diastolicBloodPressure', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-6"
                                   label="Cervical Dilation At Time Of EA"
                                   value={format($form.cervicalDilationAtTimeOfEA)}
                                   onChange={value => this.updateField('cervicalDilationAtTimeOfEA', value)}/>
                        <Checkbox className="col-6"
                                  label="Oxytocin At Time Of EA"
                                  checked={$form.hasOxytocinAtTimeOfEA}
                                  onChange={value => this.updateField('hasOxytocinAtTimeOfEA', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="2. Others">
                    <div className="row">
                        <TextArea className="col-12"
                                  label="Description"
                                  maxLength={1000}
                                  wordCountVisible={true}
                                  value={format($form.description)}
                                  onChange={value => this.updateField('description', value)}/>
                    </div>
                </FieldSet>

            </div>
        );
    }
}

PatientForm.propTypes = {

    $form: PropTypes.object,

    updatePatientInfoField: PropTypes.func

};

PatientForm.defaultProps = {};

function mapStateToProps(state, ownProps) {
    return {
        $form: state.patientInfo.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);