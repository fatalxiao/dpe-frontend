import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import * as actionTypes from 'reduxes/actionTypes';

import ModuleLoading from 'components/ModuleLoading';
import StepAction from 'components/StepAction';
import ObservalForm from './ObservalForm';
import Msg from 'components/Msg';

import 'scss/containers/app/modules/patient/observalData/ObservalData.scss';

class ObservalData extends Component {

    constructor(props) {

        super(props);

        this.state = {
            errorMsg: ''
        };

        this.updateFieldHandler = ::this.updateFieldHandler;
        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    updateFieldHandler() {
        if (this.state.errorMsg) {
            this.setState({
                errorMsg: ''
            });
        }
    }

    prevStep() {
        const {match, routerPush} = this.props;
        routerPush(`/app/patient/analgesia-data/${match.params.patientId}`);
    }

    save() {
        const {match, createOrUpdateObservalData} = this.props;
        createOrUpdateObservalData(match.params.patientId);
    }

    componentWillMount() {

        const {updatePatientStep, resetPatientData} = this.props;

        updatePatientStep(2);
        resetPatientData();

        setTimeout(() => {
            const {match, getObservalData} = this.props;
            if (match && match.params && match.params.patientId) {
                getObservalData(match.params.patientId);
            }
        }, 0);

    }

    render() {

        const {$getActionType} = this.props,
            {errorMsg} = this.state;

        return (
            <div className="observal-data">
                {
                    $getActionType !== actionTypes.GET_OBSERVAL_SUCCESS ?
                        <ModuleLoading/>
                        :
                        <div>
                            <ObservalForm onUpdateField={this.updateFieldHandler}/>

                            {
                                errorMsg ?
                                    <Msg type={Msg.Type.ERROR}>
                                        {errorMsg}
                                    </Msg>
                                    :
                                    null
                            }

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
    resetPatientData: PropTypes.func,
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