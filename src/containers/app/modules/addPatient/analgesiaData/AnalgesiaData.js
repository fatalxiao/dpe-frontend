import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/addPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        this.props.routerPush('/app/add-patient/patient-information');
    }

    save() {
        this.props.routerPush('/app/add-patient/observal-data');
    }

    render() {

        const {$stepsLength, $activatedStep} = this.props;

        return (
            <div className="analgesia-data">


                <StepAction isFirst={$activatedStep === 0}
                            isLast={$activatedStep === $stepsLength - 1}
                            onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

AnalgesiaData.propTypes = {
    $stepsLength: PropTypes.number,
    $activatedStep: PropTypes.number
};

function mapStateToProps(state, ownProps) {

    const steps = state.addPatient.steps;

    return {
        $stepsLength: steps ? steps.length : 0,
        $activatedStep: state.addPatient.activatedStep
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);