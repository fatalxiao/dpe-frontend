import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import FlatButton from 'alcedo-ui/FlatButton';
import PatientList from './PatientList';

import 'scss/containers/app/nav/patients/PatientListWrapper.scss';

class PatientListWrapper extends Component {

    constructor(props) {

        super(props);

        this.goToList = ::this.goToList;

    }

    goToList() {
        this.props.routerPush('/app/patient-list');
    }

    render() {

        const {$patientList} = this.props;

        return (
            <div className="patient-list-wrapper">

                <FlatButton className="all-patients-button"
                            value="All Patients"
                            iconCls="icon-list"
                            onTouchTap={this.goToList}>
                    <span className="patients-count">{`[${$patientList.length}]`}</span>
                </FlatButton>

                <PatientList/>

            </div>
        );

    }
}

PatientListWrapper.propTypes = {

    $patientList: PropTypes.array,

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $patientList: state.patients.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientListWrapper);