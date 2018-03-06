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

import 'scss/containers/app/modules/editPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.patientId = null;

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        const {routerPush} = this.props;
        routerPush(`/app/patient/info/${this.patientId}`);
    }

    save() {
        const {createOrUpdateAnalgesiaData, routerPush} = this.props;
        createOrUpdateAnalgesiaData(this.patientId, () => {
            routerPush(`/app/patient/observal/${this.patientId}`);
        });
    }

    componentWillMount() {

        const {updatePatientStep} = this.props;
        updatePatientStep(1);

        const {match, getAnalgesiaData} = this.props;
        if (match && match.params && match.params.patientId) {
            this.patientId = match.params.patientId;
            getAnalgesiaData(this.patientId);
        }

    }

    render() {

        const {$getActionType} = this.props;

        return (
            <div className="analgesia-data">
                {
                    $getActionType !== actionTypes.GET_ANALGESIA_SUCCESS ?
                        <ModuleLoading/>
                        :
                        <div>
                            <AnalgesiaTable/>
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
    createOrUpdateAnalgesiaData: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $getActionType: state.analgesia.getActionType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);