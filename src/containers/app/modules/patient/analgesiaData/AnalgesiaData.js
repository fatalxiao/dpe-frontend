import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import * as actionTypes from 'reduxes/actionTypes';

import ModuleLoading from 'components/ModuleLoading';
import StepAction from 'components/StepAction';
import AnalgesiaTable from './AnalgesiaTable';
import Msg from 'components/Msg';

import 'scss/containers/app/modules/patient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

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
        routerPush(`/app/patient/update-patient/${match.params.patientId}`);
    }

    save() {
        const {match, createOrUpdateAnalgesiaData} = this.props;
        if (match && match.params && match.params.patientId) {
            createOrUpdateAnalgesiaData(match.params.patientId);
        }
    }

    componentWillMount() {

        const {updatePatientStep, resetPatientData} = this.props;

        updatePatientStep(1);
        resetPatientData();

        setTimeout(() => {
            const {match, getAnalgesiaData} = this.props;
            if (match && match.params && match.params.patientId) {
                getAnalgesiaData(match.params.patientId);
            }
        }, 0);

    }

    render() {

        const {$getActionType} = this.props,
            {errorMsg} = this.state;

        return (
            <div className="analgesia-data">
                {
                    $getActionType !== actionTypes.GET_ANALGESIA_SUCCESS ?
                        <ModuleLoading/>
                        :
                        <div>
                            <AnalgesiaTable onUpdateField={this.updateFieldHandler}/>

                            {
                                errorMsg ?
                                    <Msg type={Msg.Type.ERROR}>
                                        {errorMsg}
                                    </Msg>
                                    :
                                    null
                            }

                            <StepAction onPrev={this.prevStep}
                                        onNext={this.save}/>

                        </div>
                }
            </div>
        );

    }
}

AnalgesiaData.propTypes = {

    $getActionType: PropTypes.string,

    routerPush: PropTypes.func,
    updatePatientStep: PropTypes.func,
    resetPatientData: PropTypes.func,
    createOrUpdateAnalgesiaData: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $getActionType: state.analgesiaData.getActionType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);