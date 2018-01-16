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
        const {addPatientStepPrev, routerPush} = this.props;
        addPatientStepPrev();
        routerPush('/app/add-patient/analgesia-data');
    }

    save() {
        const {addPatientStepNext} = this.props;
        addPatientStepNext();
    }

    componentDidMount() {
        this.props.addPatientStepUpdate(2);
    }

    render() {

        const {} = this.props;

        return (
            <div className="observal-data">


                <StepAction isLast={true}
                            onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

ObservalData.propTypes = {
    routerPush: PropTypes.func,
    addPatientStepUpdate: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservalData);