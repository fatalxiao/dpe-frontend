import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import PatientForm from './PatientForm';
import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/addPatient/patientInformation/PatientInformation.scss';

class PatientInformation extends Component {

    constructor(props) {

        super(props);

        this.next = ::this.next;

    }

    next() {

        const {$form} = this.props;

        if (!$form.groupId || !$form.id || !$form.patientName) {
            this.setState({
                errorMsg: 'Group, ID and Patient Name is required!'
            });
            return;
        }

        this.props.routerPush('/app/add-patient/analgesia-data');

    }

    componentDidMount() {
        this.props.updateAddPatientStep(0);
    }

    render() {
        return (
            <div className="patient-information">

                <PatientForm/>

                <StepAction isFirst={true}
                            onNext={this.next}/>

            </div>
        );
    }
}

PatientInformation.propTypes = {

    $form: PropTypes.object,

    routerPush: PropTypes.func,
    updateAddPatientStep: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $form: state.patientInformation.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInformation);