import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import * as actionTypes from 'reduxes/actionTypes';

import ModuleLoading from 'components/ModuleLoading';
import StepAction from 'components/StepAction';
import ObservalForm from './ObservalForm';

import 'scss/containers/app/modules/editPatient/observalData/ObservalData.scss';

class ObservalData extends Component {

    constructor(props) {

        super(props);

        this.patientId = null;

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        const {routerPush} = this.props;
        routerPush(`/app/patient/analgesia/${this.patientId}`);
    }

    save() {
        const {createOrUpdateObservalData} = this.props;
        createOrUpdateObservalData(this.patientId, () => {
            routerPush(`/app/patient-list`);
        });
    }

    componentWillMount() {

        const {updatePatientStep} = this.props;
        updatePatientStep(2);

        const {match, getObservalData} = this.props;
        if (match && match.params && match.params.patientId) {
            this.patientId = match.params.patientId;
            getObservalData(this.patientId);
        }

    }

    render() {

        const {$getActionType} = this.props;

        return (
            <div className="observal-data">
                {
                    $getActionType !== actionTypes.GET_OBSERVAL_SUCCESS ?
                        <ModuleLoading/>
                        :
                        <div>
                            <ObservalForm onUpdateField={this.updateFieldHandler}/>
                            <StepAction isLast={true}
                                        onPrev={this.prevStep}
                                        onNext={this.save}/>
                        </div>
                }
            </div>
        );
    }
}

ObservalData.propTypes = {

    $getActionType: PropTypes.string,

    routerPush: PropTypes.func,
    updatePatientStep: PropTypes.func,
    createOrUpdateObservalData: PropTypes.func,
    getObservalData: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $getActionType: state.observal.getActionType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservalData);