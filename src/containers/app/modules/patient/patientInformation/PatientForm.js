import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import TextField from 'customized/CustomizedMaterialTextField';
import TextArea from 'customized/CustomizedMaterialTextArea';
import DropdownSelect from 'customized/CustomizedMaterialDropdownSelect';
import FieldSet from 'components/FieldSet';

import 'scss/containers/app/modules/patient/patientInformation/PatientForm.scss';

class PatientForm extends Component {

    constructor(props) {

        super(props);

        this.updateField = ::this.updateField;

    }

    updateField(fieldName, fieldValue) {

        const {onUpdateField, updatePatientInformationField} = this.props;

        updatePatientInformationField(fieldName, fieldValue);
        onUpdateField && onUpdateField();

    }

    render() {

        const {$groupList, $form} = this.props;

        return (
            <div className="patient-form">

                <FieldSet title="1. Select Patient Group">
                    <div className="row">
                        <DropdownSelect className="col-6"
                                        label="Group"
                                        data={$groupList}
                                        valueField="id"
                                        displayField="groupName"
                                        value={$form.group}
                                        required={true}
                                        onChange={value => this.updateField('group', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="2. Patient Basic Information">
                    <div className="row">
                        <TextField className="col-3"
                                   label="ID"
                                   value={$form.id || ''}
                                   required={true}
                                   onChange={value => this.updateField('id', value)}/>
                        <TextField className="col-3"
                                   label="Patient Name"
                                   value={$form.patientName || ''}
                                   required={true}
                                   onChange={value => this.updateField('patientName', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="3. Patient other Information">
                    <div className="row">
                        <TextField className="col-3"
                                   label="Age"
                                   value={$form.age || ''}
                                   onChange={value => this.updateField('age', value)}/>
                        <TextField className="col-3 gestational-weeks"
                                   label="Gestational Days"
                                   rightIconCls="unit"
                                   value={$form.gestationalDaysWeeks || ''}
                                   onChange={value => this.updateField('gestationalDaysWeeks', value)}/>
                        <TextField className="col-3 gestational-days"
                                   label="Gestational Days"
                                   rightIconCls="unit"
                                   value={$form.gestationalDaysDays || ''}
                                   onChange={value => this.updateField('gestationalDaysDays', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-3 height"
                                   label="Height"
                                   rightIconCls="unit"
                                   value={$form.height || ''}
                                   onChange={value => this.updateField('height', value)}/>
                        <TextField className="col-3 weight"
                                   label="Weight"
                                   rightIconCls="unit"
                                   value={$form.weight || ''}
                                   onChange={value => this.updateField('weight', value)}/>
                        <TextField className="col-3"
                                   label="Heart Rate"
                                   value={$form.heartRate || ''}
                                   onChange={value => this.updateField('heartRate', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-3"
                                   label="Initial Vas Score"
                                   value={$form.initialVasScore || ''}
                                   onChange={value => this.updateField('initialVasScore', value)}/>
                        <TextField className="col-6"
                                   label="Cervical Dilation At Time Of EA"
                                   value={$form.cervicalDilationAtTimeOfEA || ''}
                                   onChange={value => this.updateField('cervicalDilationAtTimeOfEA', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-3"
                                   label="Systolic Blood Pressure"
                                   value={$form.systolicBloodPressure || ''}
                                   onChange={value => this.updateField('systolicBloodPressure', value)}/>
                        <TextField className="col-3"
                                   label="Diastolic Blood Pressure"
                                   value={$form.diastolicBloodPressure || ''}
                                   onChange={value => this.updateField('diastolicBloodPressure', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="4. Others">
                    <div className="row">
                        <TextArea className="col-12"
                                  label="Description"
                                  maxLength={1000}
                                  wordCountVisible={true}
                                  value={$form.description || ''}
                                  onChange={value => this.updateField('description', value)}/>
                    </div>
                </FieldSet>

            </div>
        );
    }
}

PatientForm.propTypes = {

    $groupList: PropTypes.array,
    $form: PropTypes.object,

    updatePatientInformationField: PropTypes.func,
    onUpdateField: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $groupList: state.group.list,
        $form: state.patientInformation.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);