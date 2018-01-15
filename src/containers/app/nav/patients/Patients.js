import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';

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

    componentDidMount() {
        this.props.getPatients();
    }

    render() {

        const {$patientList} = this.props,

            hasNoPatient = !$patientList || $patientList.length < 1,
            className = (hasNoPatient ? ' no-patient' : '');

        return (
            <div className={'patients' + className}>

                {
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
                            <div key={1}>

                            </div>
                        ]
                }

            </div>
        );
    }
}

Patients.propTypes = {

    $patientList: PropTypes.array,

    routerPush: PropTypes.func,
    getPatients: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $patientList: state.patient.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);