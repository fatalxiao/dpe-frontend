import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import StepAction from 'components/StepAction';

import * as actions from 'reduxes/actions/index';

import 'scss/containers/app/modules/addPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$stepsLength, $activatedStep} = this.props;

        return (
            <div className="analgesia-data">


                <StepAction isFirst={$activatedStep === 0}
                            isLast={$activatedStep === $stepsLength - 1}/>

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