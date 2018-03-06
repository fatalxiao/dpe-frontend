import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import PatientForm from './PatientForm';
import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/editPatient/patientInfo/PatientInfo.scss';

class PatientInfo extends Component {

    constructor(props) {

        super(props);

        this.save = ::this.save;

    }

    save() {
        const {createOrUpdatePatient} = this.props;
        createOrUpdatePatient(this.patientId);
    }

    componentWillMount() {

        const {updatePatientStep} = this.props;
        updatePatientStep(0);

        const {match, getPatientInfo} = this.props;
        if (match && match.params && match.params.id) {
            this.patientId = match.params.id;
            getPatientInfo(this.patientId);
        }

    }

    render() {
        return (
            <div className="patient-info">

                <PatientForm/>

                <StepAction isFirst={true}
                            onNext={this.save}/>

            </div>
        );
    }
}

PatientInfo.propTypes = {
    updatePatientStep: PropTypes.func,
    getPatientInfo: PropTypes.func,
    createOrUpdatePatient: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInfo);