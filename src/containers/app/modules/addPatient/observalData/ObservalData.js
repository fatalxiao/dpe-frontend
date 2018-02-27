import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import MaterialProvider from 'alcedo-ui/MaterialProvider';
import Checkbox from 'customized/CustomizedMaterialCheckbox';
import TextField from 'customized/CustomizedMaterialTextField';
import TextArea from 'customized/CustomizedMaterialTextArea';
import DateTimePicker from 'customized/CustomizedMaterialDateTimePicker';
import StepAction from 'components/StepAction';
import Msg from 'components/Msg';

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
        this.props.addPatient();
    }

    componentDidMount() {
        this.props.updateAddPatientStep(2);
    }

    render() {

        const {$form} = this.props,
            {errorMsg} = this.state;

        return (
            <div className="observal-data">

                <form className="observal-data-form row">

                    <Checkbox className="col-3"
                              label="Has Carbetocin"
                              checked={$form.hasCarbetocin}
                              onChange={value => this.updateField('hasCarbetocin', value)}/>
                    <Checkbox className="col-3"
                              label="Has Hemabate"
                              checked={$form.hasHemabate}
                              onChange={value => this.updateField('hasHemabate', value)}/>
                    <TextField className="col-6 local-anesthetic-consumption"
                               label="Local Anesthetic Consumption"
                               rightIconCls="unit"
                               value={$form.localAnestheticConsumption}
                               onChange={value => this.updateField('localAnestheticConsumption', value)}/>

                    <TextField className="col-3"
                               label="PCA Count"
                               value={$form.pcaCount}
                               onChange={value => this.updateField('pcaCount', value)}/>
                    <TextField className="col-3"
                               label="Manual Bolus Count"
                               value={$form.manualBolusCount}
                               onChange={value => this.updateField('manualBolusCount', value)}/>
                    <DateTimePicker className="col-6"
                                    label="First PCA Time"
                                    value={$form.firstPcaTime}
                                    onChange={value => this.updateField('firstPcaTime', value)}/>

                    <DateTimePicker className="col-6"
                                    label="First Manual Bolus Time"
                                    value={$form.firstManualBolusTime}
                                    onChange={value => this.updateField('firstManualBolusTime', value)}/>
                    <TextField className="col-6"
                               label="Duration Of Second Stage Of Labor"
                               value={$form.durationOfSecondStageOfLabor}
                               onChange={value => this.updateField('durationOfSecondStageOfLabor', value)}/>

                    <Checkbox className="col-6"
                              label="Has Epidural Catheter Adjuestment"
                              checked={$form.hasEpiduralCatheterAdjuestment}
                              onChange={value => this.updateField('hasEpiduralCatheterAdjuestment', value)}/>
                    <Checkbox className="col-6"
                              label="Has Epidural Catheter Replacement"
                              checked={$form.hasEpiduralcatheterReplacement}
                              onChange={value => this.updateField('hasEpiduralcatheterReplacement', value)}/>

                    <Checkbox className="col-3"
                              label="Has Prenatal Fever"
                              checked={$form.hasPrenatalFever}
                              onChange={value => this.updateField('hasPrenatalFever', value)}/>
                    <Checkbox className="col-3"
                              label="Has Vasoactive Agent"
                              checked={$form.hasVasoactiveAgent}
                              onChange={value => this.updateField('hasVasoactiveAgent', value)}/>
                    <Checkbox className="col-6"
                              label="Is Unabled To Puncture Dura"
                              checked={$form.isUnabledToPunctureDura}
                              onChange={value => this.updateField('isUnabledToPunctureDura', value)}/>

                    <Checkbox className="col-3"
                              label="Has Nausea"
                              checked={$form.hasNausea}
                              onChange={value => this.updateField('hasNausea', value)}/>
                    <Checkbox className="col-3"
                              label="Has Vomit"
                              checked={$form.hasVomit}
                              onChange={value => this.updateField('hasVomit', value)}/>
                    <Checkbox className="col-3"
                              label="Has Pruritus"
                              checked={$form.hasPruritus}
                              onChange={value => this.updateField('hasPruritus', value)}/>
                    <Checkbox className="col-3"
                              label="Has Hypotension"
                              checked={$form.hasHypotension}
                              onChange={value => this.updateField('hasHypotension', value)}/>

                    <Checkbox className="col-3"
                              label="Has Caesarean Section"
                              checked={$form.hasCaesareanSection}
                              onChange={value => this.updateField('hasCaesareanSection', value)}/>
                    <Checkbox className="col-3"
                              label="Has Instrumental"
                              checked={$form.hasInstrumental}
                              onChange={value => this.updateField('hasInstrumental', value)}/>
                    <Checkbox className="col-6"
                              label="Has Postdural Puncture Headache"
                              checked={$form.hasPostduralPunctureHeadache}
                              onChange={value => this.updateField('hasPostduralPunctureHeadache', value)}/>

                    <Checkbox className="col-3"
                              label="Has Back Pain"
                              checked={$form.hasBackPain}
                              onChange={value => this.updateField('hasBackPain', value)}/>
                    <Checkbox className="col-3"
                              label="Has Paresthesia"
                              checked={$form.hasParesthesia}
                              onChange={value => this.updateField('hasParesthesia', value)}/>
                    <TextField className="col-6"
                               label="Duration Of Labor Analgesia"
                               value={$form.durationOfLaborAnalgesia}
                               onChange={value => this.updateField('durationOfLaborAnalgesia', value)}/>

                    <TextField className="col-6"
                               label="Patient Satisfaction Score"
                               value={$form.patientSatisfactionScore}
                               onChange={value => this.updateField('patientSatisfactionScore', value)}/>
                    <Checkbox className="col-6"
                              label="Has Accidental Dural Punture"
                              checked={$form.hasAccidentalDuralPunture}
                              onChange={value => this.updateField('hasAccidentalDuralPunture', value)}/>

                    <TextField className="col-6"
                               label="Lateral Episiotomy VAS Score"
                               value={$form.lateralEpisiotomyVasScore}
                               onChange={value => this.updateField('lateralEpisiotomyVasScore', value)}/>
                    <Checkbox className="col-6"
                              label="Has Lateral Episiotomy"
                              checked={$form.hasLateralEpisiotomy}
                              onChange={value => this.updateField('hasLateralEpisiotomy', value)}/>

                    <DateTimePicker className="col-6"
                                    label="Birth Time"
                                    value={$form.birthTime}
                                    onChange={value => this.updateField('birthTime', value)}/>
                    <TextField className="col-3"
                               label="Foetal Height"
                               value={$form.foetalHeight}
                               onChange={value => this.updateField('foetalHeight', value)}/>
                    <TextField className="col-3"
                               label="Foetal Weight"
                               value={$form.foetalWeight}
                               onChange={value => this.updateField('foetalWeight', value)}/>

                    <TextField className="col-3"
                               label="1min Apgar Score"
                               value={$form.oneMinuteApgarScore}
                               onChange={value => this.updateField('oneMinuteApgarScore', value)}/>
                    <TextField className="col-3"
                               label="5min Apgar Score"
                               value={$form.fiveMinuteApgarScore}
                               onChange={value => this.updateField('fiveMinuteApgarScore', value)}/>
                    <Checkbox className="col-3"
                              label="Has NICU"
                              checked={$form.hasNicu}
                              onChange={value => this.updateField('hasNicu', value)}/>
                    <TextField className="col-3"
                               label="NICU Reason"
                               value={$form.nicuReason}
                               onChange={value => this.updateField('nicuReason', value)}/>

                    <TextField className="col-3"
                               label="Arterial PH"
                               value={$form.arterialPh}
                               onChange={value => this.updateField('arterialPh', value)}/>
                    <TextField className="col-3"
                               label="Arterial BE"
                               value={$form.arterialBe}
                               onChange={value => this.updateField('arterialBe', value)}/>
                    <TextField className="col-3"
                               label="Venous PH"
                               value={$form.venousPh}
                               onChange={value => this.updateField('venousPh', value)}/>
                    <TextField className="col-3"
                               label="Venous BE"
                               value={$form.venousBe}
                               onChange={value => this.updateField('venousBe', value)}/>

                    <TextArea className="col-12"
                              label="Description"
                              maxLength={1000}
                              wordCountVisible={true}
                              value={$form.description}
                              onChange={value => this.updateField('description', value)}/>

                </form>

                {
                    errorMsg ?
                        <Msg type={Msg.Type.ERROR}>
                            {errorMsg}
                        </Msg>
                        :
                        null
                }

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
    updateAddPatientStep: PropTypes.func,
    addPatient: PropTypes.func

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