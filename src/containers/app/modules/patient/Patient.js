import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';
import {Redirect} from 'react-router-dom';

import * as actions from 'reduxes/actions/index';

import PointStep from 'alcedo-ui/PointStep';

import 'scss/containers/app/modules/patient/Patient.scss';

class Patient extends Component {

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
            <div className="patient">

                <PointStep className="patient-stepper"
                           steps={$steps}
                           activatedStep={$activatedStep}
                           finishedStep={$steps.length - 1}
                           onChange={this.stepChangeHandler}/>

                <div className="patient-content">

                    <h1 className="patient-content-title">
                        {$steps[$activatedStep].title}
                    </h1>

                    {renderRoutes(route.routes)}

                </div>

                {
                    location.pathname === '/app/patient' ?
                        <Redirect from="/app/patient" to="/app/patient/patient-information"/>
                        :
                        null
                }

            </div>
        );
    }
}

Patient.propTypes = {

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

export default connect(mapStateToProps, mapDispatchToProps)(Patient);