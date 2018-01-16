import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';
import CustomizedMaterialTextArea from 'customized/CustomizedMaterialTextArea';
import CustomizedMaterialDropdownSelect from 'customized/CustomizedMaterialDropdownSelect';
import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/addPatient/patientInformation/PatientInformation.scss';

class PatientInformation extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$groupList, $stepsLength, $activatedStep} = this.props;

        return (
            <div className="patient-information">

                <form className="patient-information-form row">

                    <CustomizedMaterialDropdownSelect className="col-3"
                                                      label="Group"
                                                      data={$groupList}
                                                      valueField="id"
                                                      displayField="name"/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="ID"/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="Patient Name"/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="Age"/>

                    <CustomizedMaterialTextField className="col-3 gestational-weeks"
                                                 label="Gestational Days"
                                                 rightIconCls="unit"/>
                    <CustomizedMaterialTextField className="col-3 gestational-days"
                                                 label=" "
                                                 rightIconCls="unit"/>

                    <CustomizedMaterialTextField className="col-3 height"
                                                 label="Height"
                                                 rightIconCls="unit"/>
                    <CustomizedMaterialTextField className="col-3 weight"
                                                 label="Weight"
                                                 rightIconCls="unit"/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="Heart Rate"/>
                    <CustomizedMaterialTextField className="col-3"
                                                 label="Initial Vas Score"/>
                    <CustomizedMaterialTextField className="col-6"
                                                 label="Cervical Dilation At Time Of EA"/>

                    <CustomizedMaterialTextField className="col-4"
                                                 label="Systolic Blood Pressure"/>
                    <CustomizedMaterialTextField className="col-4"
                                                 label="Diastolic Blood Pressure"/>
                    <CustomizedMaterialTextField className="col-4"
                                                 label="Foetal Heart Rate"/>

                    <CustomizedMaterialTextArea className="col-12"
                                                label="Description"
                                                maxLength={1000}
                                                wordCountVisible={true}/>

                    <StepAction isFirst={$activatedStep === 0}
                                isLast={$activatedStep === $stepsLength - 1}/>

                </form>

            </div>
        );
    }
}

PatientInformation.propTypes = {

    $groupList: PropTypes.array,

    $stepsLength: PropTypes.number,
    $activatedStep: PropTypes.number

};

function mapStateToProps(state, ownProps) {

    const steps = state.addPatient.steps;

    return {
        $groupList: state.group.list,
        $stepsLength: steps ? steps.length : 0,
        $activatedStep: state.addPatient.activatedStep
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation);