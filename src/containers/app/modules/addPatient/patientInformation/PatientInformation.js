import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';
import CustomizedMaterialTextArea from 'customized/CustomizedMaterialTextArea';
import CustomizedMaterialDropdownSelect from 'customized/CustomizedMaterialDropdownSelect';
import StepAction from 'components/StepAction';

import Util from 'vendors/Util';

import 'scss/containers/app/modules/addPatient/patientInformation/PatientInformation.scss';

class PatientInformation extends Component {

    constructor(props) {

        super(props);

        this.save = ::this.save;

    }

    save() {
        const {routerPush} = this.props;
        routerPush('/app/add-patient/analgesia-data');
    }

    componentDidMount() {
        this.props.addPatientStepUpdate(0);
    }

    render() {

        const {$groupList, $form} = this.props,

            {weeks: gestationalWeeks, days: gestationalDays} = Util.days2weeksDays($form.gestationalDays);

        return (
            <div className="patient-information">

                <form className="patient-information-form row">

                    <CustomizedMaterialDropdownSelect className="col-3"
                                                      label="Group"
                                                      data={$groupList}
                                                      valueField="id"
                                                      displayField="groupName"
                                                      value={$form.groupId}/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="ID"
                                                 value={$form.id}/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="Patient Name"
                                                 value={$form.patientName}/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="Age"
                                                 value={$form.age}/>

                    <CustomizedMaterialTextField className="col-3 gestational-weeks"
                                                 label="Gestational Days"
                                                 rightIconCls="unit"
                                                 value={gestationalWeeks || ''}/>
                    <CustomizedMaterialTextField className="col-3 gestational-days"
                                                 label=" "
                                                 rightIconCls="unit"
                                                 value={gestationalDays || ''}/>

                    <CustomizedMaterialTextField className="col-3 height"
                                                 label="Height"
                                                 rightIconCls="unit"
                                                 value={$form.height}/>
                    <CustomizedMaterialTextField className="col-3 weight"
                                                 label="Weight"
                                                 rightIconCls="unit"
                                                 value={$form.weight}/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="Heart Rate"
                                                 value={$form.heartRate}/>
                    <CustomizedMaterialTextField className="col-3"
                                                 label="Initial Vas Score"
                                                 value={$form.initialVasScore}/>
                    <CustomizedMaterialTextField className="col-6"
                                                 label="Cervical Dilation At Time Of EA"
                                                 value={$form.cervicalDilationAtTimeOfEA}/>

                    <CustomizedMaterialTextField className="col-4"
                                                 label="Systolic Blood Pressure"
                                                 value={$form.systolicBloodPressure}/>
                    <CustomizedMaterialTextField className="col-4"
                                                 label="Diastolic Blood Pressure"
                                                 value={$form.diastolicBloodPressure}/>
                    <CustomizedMaterialTextField className="col-4"
                                                 label="Foetal Heart Rate"
                                                 value={$form.foetalHeartRate}/>

                    <CustomizedMaterialTextArea className="col-12"
                                                label="Description"
                                                maxLength={1000}
                                                wordCountVisible={true}
                                                value={$form.description}/>

                </form>

                <StepAction isFirst={true}
                            onNext={this.save}/>

            </div>
        );
    }
}

PatientInformation.propTypes = {

    $groupList: PropTypes.array,
    $form: PropTypes.object,

    routerPush: PropTypes.func,
    addPatientStepUpdate: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $groupList: state.group.list,
        $form: state.addPatientInformation.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation);