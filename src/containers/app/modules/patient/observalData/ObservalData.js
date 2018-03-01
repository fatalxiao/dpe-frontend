import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

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
        const {patientStepPrev, routerPush} = this.props;
        patientStepPrev();
        routerPush('/app/patient/analgesia-data');
    }

    save() {
        const {match, createOrUpdateObservalData} = this.props;
        createOrUpdateObservalData(match.params.patientId);
    }

    componentDidMount() {
        this.props.updatePatientStep(2);
    }

    render() {

        const {errorMsg} = this.state;

        return (
            <div className="observal-data">

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
        );
    }
}

ObservalData.propTypes = {
    routerPush: PropTypes.func,
    updatePatientStep: PropTypes.func,
    createOrUpdateObservalData: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservalData);