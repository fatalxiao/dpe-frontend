import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import StepAction from 'components/StepAction';
import AnalgesiaTable from './AnalgesiaTable';

import 'scss/containers/app/modules/patient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        const {match, routerPush} = this.props;
        routerPush(`/app/edit-patient/patient-information/${match.params.patientId}`);
    }

    save() {
        const {match, createOrUpdateAnalgesiaData} = this.props;
        createOrUpdateAnalgesiaData(match.params.patientId);
    }

    componentDidMount() {
        this.props.updateAddPatientStep(1);
    }

    render() {
        return (
            <div className="analgesia-data">

                <AnalgesiaTable/>

                <StepAction onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

AnalgesiaData.propTypes = {
    routerPush: PropTypes.func,
    updateAddPatientStep: PropTypes.func,
    createOrUpdateAnalgesiaData: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);