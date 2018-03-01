import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Checkbox from 'customized/CustomizedMaterialCheckbox';
import TextField from 'customized/CustomizedMaterialTextField';
import TextArea from 'customized/CustomizedMaterialTextArea';
import DateTimePicker from 'customized/CustomizedMaterialDateTimePicker';
import FieldSet from 'components/FieldSet';

import 'scss/containers/app/modules/patient/observalData/ObservalForm.scss';

class ObservalForm extends Component {

    constructor(props) {

        super(props);

        this.updateField = ::this.updateField;

    }

    updateField(fieldName, fieldValue) {
        const {updateObservalDataField, onUpdateField} = this.props;
        updateObservalDataField(fieldName, fieldValue);
        onUpdateField && onUpdateField();
    }

    render() {

        const {$form} = this.props;

        return (
            <div className="observal-data-form">

                <FieldSet title="1. Medication use">
                    <div className="row">
                        <TextField className="col-6 local-anesthetic-consumption"
                                   label="Local Anesthetic Consumption"
                                   rightIconCls="unit"
                                   value={$form.localAnestheticConsumption}
                                   onChange={value => this.updateField('localAnestheticConsumption', value)}/>
                        <Checkbox className="col-3"
                                  label="Carbetocin"
                                  checked={$form.hasCarbetocin}
                                  onChange={value => this.updateField('hasCarbetocin', value)}/>
                        <Checkbox className="col-3"
                                  label="Hemabate"
                                  checked={$form.hasHemabate}
                                  onChange={value => this.updateField('hasHemabate', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="2. PCA">
                    <div className="row">
                        <DateTimePicker className="col-6"
                                        label="First PCA Time"
                                        value={$form.firstPcaTime}
                                        onChange={value => this.updateField('firstPcaTime', value)}/>
                        <TextField className="col-3"
                                   label="PCA Count"
                                   value={$form.pcaCount}
                                   onChange={value => this.updateField('pcaCount', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="3. Bolus">
                    <div className="row">
                        <DateTimePicker className="col-6"
                                        label="First Manual Bolus Time"
                                        value={$form.firstManualBolusTime}
                                        onChange={value => this.updateField('firstManualBolusTime', value)}/>
                        <TextField className="col-6"
                                   label="Manual Bolus Count"
                                   value={$form.manualBolusCount}
                                   onChange={value => this.updateField('manualBolusCount', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="4. Epidural Catheter">
                    <div className="row">
                        <Checkbox className="col-6"
                                  label="Epidural Catheter Adjuestment"
                                  checked={$form.hasEpiduralCatheterAdjuestment}
                                  onChange={value => this.updateField('hasEpiduralCatheterAdjuestment', value)}/>
                        <Checkbox className="col-6"
                                  label="Epidural Catheter Replacement"
                                  checked={$form.hasEpiduralcatheterReplacement}
                                  onChange={value => this.updateField('hasEpiduralcatheterReplacement', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="5. Labor">
                    <div className="row">
                        <TextField className="col-6"
                                   label="Duration Of Labor Analgesia"
                                   value={$form.durationOfLaborAnalgesia}
                                   onChange={value => this.updateField('durationOfLaborAnalgesia', value)}/>
                        <TextField className="col-6"
                                   label="Duration Of Second Stage Of Labor"
                                   value={$form.durationOfSecondStageOfLabor}
                                   onChange={value => this.updateField('durationOfSecondStageOfLabor', value)}/>
                    </div>
                    <div className="row">
                        <TextField className="col-6"
                                   label="Patient Satisfaction Score"
                                   value={$form.patientSatisfactionScore}
                                   onChange={value => this.updateField('patientSatisfactionScore', value)}/>
                    </div>
                    <div className="row">
                        <Checkbox className="col-3"
                                  label="Prenatal Fever"
                                  checked={$form.hasPrenatalFever}
                                  onChange={value => this.updateField('hasPrenatalFever', value)}/>
                        <Checkbox className="col-3"
                                  label="Vasoactive Agent"
                                  checked={$form.hasVasoactiveAgent}
                                  onChange={value => this.updateField('hasVasoactiveAgent', value)}/>
                        <Checkbox className="col-3"
                                  label="Nausea"
                                  checked={$form.hasNausea}
                                  onChange={value => this.updateField('hasNausea', value)}/>
                        <Checkbox className="col-3"
                                  label="Vomit"
                                  checked={$form.hasVomit}
                                  onChange={value => this.updateField('hasVomit', value)}/>
                    </div>
                    <div className="row">
                        <Checkbox className="col-3"
                                  label="Pruritus"
                                  checked={$form.hasPruritus}
                                  onChange={value => this.updateField('hasPruritus', value)}/>
                        <Checkbox className="col-3"
                                  label="Hypotension"
                                  checked={$form.hasHypotension}
                                  onChange={value => this.updateField('hasHypotension', value)}/>
                        <Checkbox className="col-6"
                                  label="Unabled To Puncture Dura"
                                  checked={$form.isUnabledToPunctureDura}
                                  onChange={value => this.updateField('isUnabledToPunctureDura', value)}/>
                    </div>
                    <div className="row">
                        <Checkbox className="col-3"
                                  label="Caesarean Section"
                                  checked={$form.hasCaesareanSection}
                                  onChange={value => this.updateField('hasCaesareanSection', value)}/>
                        <Checkbox className="col-3"
                                  label="Instrumental"
                                  checked={$form.hasInstrumental}
                                  onChange={value => this.updateField('hasInstrumental', value)}/>
                        <Checkbox className="col-6"
                                  label="Postdural Puncture Headache"
                                  checked={$form.hasPostduralPunctureHeadache}
                                  onChange={value => this.updateField('hasPostduralPunctureHeadache', value)}/>
                    </div>
                    <div className="row">
                        <Checkbox className="col-3"
                                  label="Back Pain"
                                  checked={$form.hasBackPain}
                                  onChange={value => this.updateField('hasBackPain', value)}/>
                        <Checkbox className="col-3"
                                  label="Paresthesia"
                                  checked={$form.hasParesthesia}
                                  onChange={value => this.updateField('hasParesthesia', value)}/>
                        <Checkbox className="col-6"
                                  label="Accidental Dural Punture"
                                  checked={$form.hasAccidentalDuralPunture}
                                  onChange={value => this.updateField('hasAccidentalDuralPunture', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="6. Lateral Episiotomy">
                    <div className="row">
                        <Checkbox className="col-3"
                                  label="Lateral Episiotomy"
                                  checked={$form.hasLateralEpisiotomy}
                                  onChange={value => this.updateField('hasLateralEpisiotomy', value)}/>
                        <TextField className="col-6"
                                   label="Lateral Episiotomy VAS Score"
                                   value={$form.lateralEpisiotomyVasScore}
                            // disabled={!$form.hasLateralEpisiotomy}
                                   onChange={value => this.updateField('lateralEpisiotomyVasScore', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="7. NICU">
                    <div className="row">
                        <Checkbox className="col-3"
                                  label="NICU"
                                  checked={$form.hasNicu}
                                  onChange={value => this.updateField('hasNicu', value)}/>
                        <TextArea className="col-9"
                                  label="NICU Reason"
                                  value={$form.nicuReason}
                            // disabled={!$form.hasNicu}
                                  onChange={value => this.updateField('nicuReason', value)}/>
                    </div>
                </FieldSet>

                <FieldSet title="8. Foetal">
                    <div className="row">
                        <DateTimePicker className="col-6"
                                        label="Birth Time"
                                        value={$form.birthTime}
                                        onChange={value => this.updateField('birthTime', value)}/>
                    </div>
                    <div className="row">
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
                    </div>
                    <div className="row">
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
                    </div>
                </FieldSet>

                <FieldSet title="9. Others">
                    <div className="row">
                        <TextArea className="col-12"
                                  label="Description"
                                  maxLength={1000}
                                  wordCountVisible={true}
                                  value={$form.description}
                                  onChange={value => this.updateField('description', value)}/>
                    </div>
                </FieldSet>

            </div>
        );
    }
}

ObservalForm.propTypes = {

    $form: PropTypes.object,

    updateObservalDataField: PropTypes.func,
    onUpdateField: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $form: state.observalData.form
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservalForm);