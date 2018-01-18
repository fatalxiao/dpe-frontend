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

        this.goToList = ::this.goToList;

    }

    goToList() {
        this.props.routerPush('/app/patient-list');
    }

    render() {

        const {$groupList, $patientList} = this.props;

        return (
            <div className="patient-list-wrapper">

                <FlatButton className="all-patients-button"
                            value="All Patients"
                            iconCls="fa fa-align-left"
                            onTouchTap={this.goToList}/>

                <div className="patient-list">

                    {
                        $patientList.map((patient, index) => {

                            const groupName = $groupList.find(item => item.id === patient.groupId).groupName,

                                {weeks, days} = Util.days2weeksDays(patient.gestationalDays),
                                desc = [patient.id, `${weeks}w + ${days}d`].join('  ·  ');

                            return (
                                <FlatButton key={index}
                                            className="patient">

                                    <div className="patient-name">
                                        {patient.patientName}
                                        <span className="patient-group"> ({groupName})</span>
                                    </div>

                                    <div className="patient-desc">
                                        {desc}
                                    </div>

                                </FlatButton>
                            );

                        })
                    }

                </div>

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
        $patientList: state.patient.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);