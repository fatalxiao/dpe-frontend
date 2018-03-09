import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import PatientListTable from './PatientListTable';
import NavNoPatient from 'containers/app/nav/patients/NavNoPatient';

import 'scss/containers/app/modules/patientList/PatientList.scss';

class PatientList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$patientList} = this.props;

        return (
            <div className="patient-list">

                {
                    $patientList && $patientList.length > 0 ?
                        <PatientListTable/>
                        :
                        <NavNoPatient/>
                }

            </div>
        );
    }
}

PatientList.propTypes = {
    $patientList: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        $patientList: state.patients.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);