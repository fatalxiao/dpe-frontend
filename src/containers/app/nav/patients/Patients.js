import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import * as actionTypes from 'reduxes/actionTypes';

import FlatButton from 'alcedo-ui/FlatButton';
import CircularLoading from 'alcedo-ui/CircularLoading';
import PatientList from './PatientList';

import 'scss/containers/app/nav/patients/Patients.scss';

class Patients extends Component {

    constructor(props) {

        super(props);

        this.goToList = ::this.goToList;
        this.addPatient = ::this.addPatient;

    }

    goToList() {
        this.props.routerPush('/app/patient-list');
    }

    addPatient() {
        this.props.routerPush('/app/add-patient');
    }

    render() {

        const {$groupListActionType, $patientList, $patientListActionType} = this.props,

            hasNoPatient = !$patientList || $patientList.length < 1,
            className = (hasNoPatient ? ' no-patient' : '');

        return (
            <div className={'patients' + className}>

                {
                    $groupListActionType === actionTypes.GET_GROUPS_REQUEST
                    || $patientListActionType === actionTypes.GET_PATIENTS_REQUEST ?
                        <CircularLoading/>
                        :
                        hasNoPatient ?
                            <div className="add-patient-wrapper">

                                <i className="icon-plus add-patient-icon"
                                   onTouchTap={this.addPatient}></i>

                                You have no patient now.<br/>
                                Would you <span className="add-patient-button"
                                                onTouchTap={this.addPatient}>Add A Patient</span> ?
                            </div>
                            :
                            [
                                <FlatButton key="0"
                                            className="all-patients-button"
                                            value="All Patients"
                                            iconCls="fa fa-align-left"
                                            onTouchTap={this.goToList}/>,
                                <PatientList key="1"/>
                            ]
                }

            </div>
        );
    }
}

Patients.propTypes = {

    $groupListActionType: PropTypes.string,
    $patientList: PropTypes.array,
    $patientListActionType: PropTypes.string,

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $groupListActionType: state.group.actionType,
        $patientList: state.patient.list,
        $patientListActionType: state.patient.actionType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);