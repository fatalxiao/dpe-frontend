import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Checkbox from 'alcedo-ui/Checkbox';
import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';
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

                <form className="observal-data-form row">

                    <Checkbox className="col-3"
                              label="Carbetocin"/>
                    <Checkbox className="col-3"
                              label="Hemabate"/>
                    <CustomizedMaterialTextField className="col-6"
                                                 label="Local Anesthetic Consumption"/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="PCA Count"/>
                    <CustomizedMaterialTextField className="col-3"
                                                 label="Manual Bolus Count"/>
                    <CustomizedMaterialTextField className="col-3"
                                                 label="first_pca_time"/>

                </form>

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