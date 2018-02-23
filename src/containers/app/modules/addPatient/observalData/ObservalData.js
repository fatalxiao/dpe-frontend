import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import MaterialProvider from 'alcedo-ui/MaterialProvider';
import Checkbox from 'alcedo-ui/Checkbox';
import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';
import CustomizedMaterialDateTimePicker from 'customized/CustomizedMaterialDateTimePicker';
import StepAction from 'components/StepAction';

import 'scss/containers/app/modules/addPatient/observalData/ObservalData.scss';

class ObservalData extends Component {

    constructor(props) {

        super(props);

        this.state = {
            errorMsg: ''
        };

        this.updateField = ::this.updateField;
        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    updateField(fieldName, fieldValue) {

        if (this.state.errorMsg) {
            this.setState({
                errorMsg: ''
            });
        }

        this.props.updateObservalDataField(fieldName, fieldValue);

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
        this.props.updateAddPatientStep(2);
    }

    render() {

        const {$form} = this.props;

        return (
            <div className="observal-data">

                <form className="observal-data-form row">

                    <MaterialProvider className="col-3"
                                      label="Has Carbetocin">
                        <Checkbox value={$form.hasCarbetocin}
                                  onChange={value => this.updateField('group', value)}/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Hemabate">
                        <Checkbox/>
                    </MaterialProvider>
                    <CustomizedMaterialTextField className="col-6 local-anesthetic-consumption"
                                                 label="Local Anesthetic Consumption"
                                                 rightIconCls="unit"/>

                    <CustomizedMaterialTextField className="col-3"
                                                 label="PCA Count"/>
                    <CustomizedMaterialTextField className="col-3"
                                                 label="Manual Bolus Count"/>
                    <CustomizedMaterialDateTimePicker className="col-6"
                                                      label="First PCA Time"/>

                    <CustomizedMaterialDateTimePicker className="col-6"
                                                      label="First Manual Bolus Time"/>
                    <CustomizedMaterialDateTimePicker className="col-6"
                                                      label="Duration Of Second Stage Of Labor"/>

                    <MaterialProvider className="col-6"
                                      label="Has Epidural Catheter Adjuestment">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-6"
                                      label="Has Epidural Catheter Replacement">
                        <Checkbox/>
                    </MaterialProvider>

                    <MaterialProvider className="col-3"
                                      label="Has Prenatal Fever">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Vasoactive Agent">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-6"
                                      label="Is Unabled To Puncture Dura">
                        <Checkbox/>
                    </MaterialProvider>

                    <MaterialProvider className="col-3"
                                      label="Has Nausea">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Vomit">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Pruritus">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Hypotension">
                        <Checkbox/>
                    </MaterialProvider>

                    <MaterialProvider className="col-3"
                                      label="Has Caesarean Section">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Instrumental">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-6"
                                      label="Has Postdural Puncture Headache">
                        <Checkbox/>
                    </MaterialProvider>

                    <MaterialProvider className="col-3"
                                      label="Has Back Pain">
                        <Checkbox/>
                    </MaterialProvider>
                    <MaterialProvider className="col-3"
                                      label="Has Paresthesia">
                        <Checkbox/>
                    </MaterialProvider>
                    <CustomizedMaterialDateTimePicker className="col-6"
                                                      label="Duration Of Labor Analgesia"/>

                    <CustomizedMaterialTextField className="col-6"
                                                 label="Patient Satisfaction Score"/>
                    <MaterialProvider className="col-6"
                                      label="Has Accidental Dural Punture">
                        <Checkbox/>
                    </MaterialProvider>

                    <CustomizedMaterialTextField className="col-6"
                                                 label="Lateral Episiotomy VAS Score"/>
                    <MaterialProvider className="col-6"
                                      label="Has Lateral Episiotomy">
                        <Checkbox/>
                    </MaterialProvider>

                </form>

                <StepAction isLast={true}
                            onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

ObservalData.propTypes = {

    $form: PropTypes.object,

    updateObservalDataField: PropTypes.func,
    routerPush: PropTypes.func,
    updateAddPatientStep: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $form: state.observalData.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservalData);