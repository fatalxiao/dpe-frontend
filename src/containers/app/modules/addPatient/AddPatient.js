import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import RoundStep from 'alcedo-ui/RoundStep';

import 'scss/containers/app/modules/addPatient/AddPatient.scss';

class AddPatient extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$steps, $activatedStep, $finishedStep} = this.props;

        return (
            <div className="add-patient">

                <RoundStep steps={$steps}
                           activatedStep={$activatedStep}
                           finishedStep={$finishedStep}/>

            </div>
        );
    }
}

AddPatient.propTypes = {

    $steps: PropTypes.array,

    $activatedStep: PropTypes.number,
    $finishedStep: PropTypes.number

};

function mapStateToProps(state, ownProps) {
    return {
        $steps: state.addPatient.steps,
        $activatedStep: state.addPatient.activatedStep,
        $finishedStep: state.addPatient.finishedStep
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);