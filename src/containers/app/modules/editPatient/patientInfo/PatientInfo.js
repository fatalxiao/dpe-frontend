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
        createOrUpdatePatient();
    }

    componentWillMount() {

        const {updatePatientStep, resetPatientData} = this.props;

        updatePatientStep(0);
        resetPatientData();

        setTimeout(() => {
            const {match, getPatientInfo} = this.props;
            if (match && match.params && match.params.id) {
                getPatientInfo(match.params.id);
            }
        }, 0);

    }

    componentWillReceiveProps(nextProps) {

        const {match: nextMatch} = nextProps,
            {match, getPatientInfo} = this.props;

        if (nextMatch && nextMatch.params && nextMatch.params.id && match && match.params
            && nextMatch.params.id !== match.params.id) {
            getPatientInfo(nextMatch.params.id);
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
    resetPatientData: PropTypes.func,
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