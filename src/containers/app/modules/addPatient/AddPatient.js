import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';
import {Redirect} from 'react-router-dom';

import * as actions from 'reduxes/actions/index';

import VerticalPointStep from 'alcedo-ui/VerticalPointStep';

import 'scss/containers/app/modules/addPatient/AddPatient.scss';

class AddPatient extends Component {

    constructor(props) {

        super(props);

        this.stepChangeHandler = ::this.stepChangeHandler;

    }

    stepChangeHandler({activatedStep}) {

        const {$steps, routerPush} = this.props;

        routerPush($steps[activatedStep].route);

    }

    render() {

        const {route, $steps, $activatedStep} = this.props;

        return (
            <div className="add-patient">

                <VerticalPointStep className="add-patient-stepper"
                                   steps={$steps}
                                   activatedStep={$activatedStep}
                                   finishedStep={$steps.length - 1}
                                   onChange={this.stepChangeHandler}/>

                <div className="add-patient-content">

                    <h1 className="add-patient-content-title">
                        <span className="add-patient-content-title-step">{`Step ${$activatedStep + 1}. `}</span>
                        {$steps[$activatedStep].title}
                    </h1>

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

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $steps: state.addPatient.steps,
        $activatedStep: state.addPatient.activatedStep
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPatient);