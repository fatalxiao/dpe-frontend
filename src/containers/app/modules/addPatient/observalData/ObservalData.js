import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/addPatient/observalData/ObservalData.scss';

class ObservalData extends Component {

    constructor(props) {

        super(props);

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        this.props.routerPush('/app/add-patient/analgesia-data');
    }

    save() {

    }

    render() {

        const {$stepsLength, $activatedStep} = this.props;

        return (
            <div className="observal-data">


                <StepAction isFirst={$activatedStep === 0}
                            isLast={$activatedStep === $stepsLength - 1}
                            onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

ObservalData.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ObservalData);