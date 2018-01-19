import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import * as actionTypes from 'reduxes/actionTypes';

import FlatButton from 'alcedo-ui/FlatButton';
import CircularLoading from 'alcedo-ui/CircularLoading';
import IconButton from 'alcedo-ui/IconButton';

import NavPatientCollapsed from './NavPatientMenu';
import NoPatient from './NoPatient';
import PatientList from './PatientList';

import 'scss/containers/app/nav/patients/NavPatient.scss';

class NavPatient extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {isCollapsed, isFold, $groupListActionType, $patientList, $patientListActionType} = this.props,

            hasNoPatient = !$patientList || $patientList.length < 1,
            wrapperClassName = (hasNoPatient ? ' no-patient' : '') + (isCollapsed ? ' collapsed' : '')
                + (isFold ? ' fold' : '');

        return (
            <div className={'nav-patient' + wrapperClassName}>

                {
                    $groupListActionType === actionTypes.GET_GROUPS_REQUEST
                    || $patientListActionType === actionTypes.GET_PATIENTS_REQUEST ?
                        <CircularLoading/>
                        :
                        (
                            isCollapsed ?
                                <NavPatientCollapsed isFold={isFold}/>
                                :
                                (
                                    hasNoPatient ?
                                        <NoPatient/>
                                        :
                                        <PatientList/>
                                )
                        )
                }

            </div>
        );
    }
}

NavPatient.propTypes = {

    isCollapsed: PropTypes.bool,
    isFold: PropTypes.bool,

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

export default connect(mapStateToProps, mapDispatchToProps)(NavPatient);