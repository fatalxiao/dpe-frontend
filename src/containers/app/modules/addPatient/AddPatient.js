import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';
import {Redirect} from 'react-router-dom';

import * as actions from 'reduxes/actions/index';

import HorizontalPointStep from 'alcedo-ui/HorizontalPointStep';

import 'scss/containers/app/modules/addPatient/AddPatient.scss';

class AddPatient extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {route, $steps, $activatedStep, $finishedStep} = this.props;

        return (
            <div className="add-patient">

                <HorizontalPointStep className="add-patient-stepper"
                                     steps={$steps}
                                     activatedStep={$activatedStep}
                                     finishedStep={$finishedStep}/>

                <div className="add-patient-content">
                    {renderRoutes(route.routes)}
                </div>

                {
                    location.pathname === '/app/add-patient' ?
                        <Redirect from="/app/add-patient" to="/app/add-patient/patient-information"/>
                        :
                        null
                }

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