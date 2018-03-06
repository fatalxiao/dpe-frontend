import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renderRoutes} from 'react-router-config';

import * as actions from 'reduxes/actions/index';

import PointStep from 'alcedo-ui/PointStep';

import 'scss/containers/app/modules/editPatient/EditPatient.scss';

class EditPatient extends Component {

    constructor(props) {

        super(props);

        this.stepChangeHandler = ::this.stepChangeHandler;

    }

    stepChangeHandler({activatedStep}) {

        const {$steps, routerPush} = this.props;

        routerPush($steps[activatedStep].route);

    }

    render() {

        const {route, $form, $steps, $activatedStep} = this.props;

        return (
            <div className="patient">

                <PointStep className="patient-stepper"
                           steps={$steps}
                           activatedStep={$activatedStep}
                           finishedStep={$steps.length - 1}
                           onChange={this.stepChangeHandler}/>

                <div className="patient-content">

                    {
                        $form ?
                            <div className="patient-base-info">
                                <h1 className="patient-name">{$form.patientName}</h1>
                                <span
                                    className="patient-desc">{`${$form.id}  ·  ${$form.group && $form.group.name}`}</span>
                            </div>
                            :
                            null
                    }

                    {
                        $activatedStep >= 0 ?
                            <h2 className="patient-content-title">
                                {`Step ${$activatedStep + 1}. ${$steps[$activatedStep].title}`}
                            </h2>
                            :
                            null
                    }

                    {renderRoutes(route.routes)}

                </div>

            </div>
        );
    }
}

EditPatient.propTypes = {

    $form: PropTypes.object,
    $steps: PropTypes.array,

    $activatedStep: PropTypes.number,

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $form: state.patientInfo.form,
        $steps: state.editPatient.steps,
        $activatedStep: state.editPatient.activatedStep
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPatient);