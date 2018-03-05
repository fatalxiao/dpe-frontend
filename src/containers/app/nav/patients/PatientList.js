import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';

import Util from 'vendors/Util';

import 'scss/containers/app/nav/patients/PatientList.scss';

class PatientList extends Component {

    constructor(props) {

        super(props);

        this.statusTouchTapHandler = ::this.statusTouchTapHandler;

    }

    statusTouchTapHandler(e, patientId, disabled) {

        e.stopPropagation();

        const {enablePatient, disablePatient} = this.props;
        disabled ? enablePatient(patientId) : disablePatient(patientId);

    }

    render() {

        const {$groupList, $patientList, routerPush} = this.props;

        return (
            <div className="patient-list">

                {
                    $patientList.map((patient, index) => {

                        const patientId = patient.id,
                            disabled = patient.disabled,

                            groupName = $groupList.find(item => item.id === patient.groupId).name,

                            itemClassName = classNames('patient', {
                                disabled
                            }),
                            statusClassName = classNames('patient-status', {
                                disabled
                            }),

                            {weeks, days} = Util.days2weeksDays(patient.gestationalDays);

                        return (
                            <FlatButton key={index}
                                        className={itemClassName}
                                        onTouchTap={() => {
                                            routerPush(`/app/patient/update-patient/${patientId}`);
                                        }}>

                                <div className={statusClassName}
                                     onTouchTap={e => {
                                         this.statusTouchTapHandler(e, patientId, disabled);
                                     }}>
                                    <div className="patient-status-dot"></div>
                                </div>

                                <div className="patient-info">
                                    <span className="patient-name">{patient.patientName}</span>
                                    <span className="patient-group">{`  ${groupName}`}</span>
                                </div>

                                <div className="patient-desc">
                                    {`${patientId}  ·  ${weeks}w + ${days}d`}
                                </div>

                            </FlatButton>
                        );

                    })
                }

            </div>
        );

    }
}

PatientList.propTypes = {

    $groupList: PropTypes.array,
    $patientList: PropTypes.array,

    routerPush: PropTypes.func,
    enablePatient: PropTypes.func,
    disablePatient: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $groupList: state.group.list,
        $patientList: state.patients.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);