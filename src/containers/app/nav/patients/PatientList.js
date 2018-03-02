import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';

import Util from 'vendors/Util';

import 'scss/containers/app/nav/patients/PatientList.scss';

class PatientList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$groupList, $patientList, routerPush} = this.props;

        return (
            <div className="patient-list">

                {
                    $patientList.map((patient, index) => {

                        const groupName = $groupList.find(item => item.id === patient.groupId).groupName,
                            {weeks, days} = Util.days2weeksDays(patient.gestationalDays);

                        return (
                            <FlatButton key={index}
                                        className="patient"
                                        onTouchTap={() => {
                                            routerPush(`/app/patient/update-patient/${patient.id}`);
                                        }}>

                                <div className="patient-info">
                                    <span className="patient-name">{patient.patientName}</span>
                                    <span className="patient-group">{`  ${groupName}`}</span>
                                </div>

                                <div className="patient-desc">
                                    {`${patient.id}  ·  ${weeks}w + ${days}d`}
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

    routerPush: PropTypes.func

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