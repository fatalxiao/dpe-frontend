import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';
import Checkbox from 'alcedo-ui/Checkbox';
import Msg from 'components/Msg';
import StepAction from 'components/StepAction';
import TextField from 'customized/CustomizedMaterialTextField';
import DropdownSelect from 'customized/CustomizedMaterialDropdownSelect';

import 'scss/containers/app/modules/addPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.state = {
            errorMsg: ''
        };

        this.updateField = ::this.updateField;
        this.prevStep = ::this.prevStep;
        this.next = ::this.next;

    }

    updateField(id, fieldName, fieldValue) {

        if (this.state.errorMsg) {
            this.setState({
                errorMsg: ''
            });
        }

        const {updateAnalgesiaDataField} = this.props;
        updateAnalgesiaDataField(id, fieldName, fieldValue);

    }

    prevStep() {
        const {routerPush} = this.props;
        routerPush('/app/add-patient/patient-information');
    }

    next() {
        const {routerPush} = this.props;
        routerPush('/app/add-patient/observal-data');
    }

    componentDidMount() {
        this.props.updateAddPatientStep(1);
    }

    render() {

        const {$sensoryBlockList, $analgesiaData} = this.props,
            {errorMsg} = this.state,
            self = this;

        return (
            <div className="analgesia-data">

                <div className="analgesia-data-table-scroller">
                    <Table className="analgesia-data-table"
                           columns={[{
                               header: 'Time',
                               renderer: rowData => rowData.timePoint <= 60 ?
                                   `${rowData.timePoint} min`
                                   :
                                   `${rowData.timePoint / 60} h`
                           }, {
                               header: 'Contraction',
                               renderer: rowData =>
                                   <Checkbox value={rowData.hasContraction}
                                             onChange={value => self.updateField(rowData.id, 'hasContraction', value)}/>
                           }, {
                               header: 'Vas',
                               renderer: rowData =>
                                   <TextField className="vas"
                                              value={rowData.vasScore}
                                              onChange={value => self.updateField(rowData.id, 'vasScore', value)}/>
                           }, {
                               header: 'TSB',
                               renderer: rowData =>
                                   <DropdownSelect className="tsb"
                                                   data={$sensoryBlockList}
                                                   value={rowData.thoracicSensoryBlockLeft}
                                                   valueField="sensoryBlockValue"
                                                   displayField="sensoryBlockName"
                                                   onChange={value => self.updateField(rowData.id, 'thoracicSensoryBlockLeft', value)}/>
                           }, {
                               header: 'SSB',
                               renderer: rowData =>
                                   <DropdownSelect className="ssb"
                                                   data={$sensoryBlockList}
                                                   value={rowData.sacralSensoryBlockLeft}
                                                   valueField="sensoryBlockValue"
                                                   displayField="sensoryBlockName"
                                                   onChange={value => self.updateField(rowData.id, 'sacralSensoryBlockLeft', value)}/>
                           }, {
                               header: 'Bromage',
                               renderer: rowData =>
                                   <TextField className="bromage"
                                              value={rowData.bromageScore}
                                              onChange={value => self.updateField(rowData.id, 'bromageScore', value)}/>
                           }, {
                               header: 'SBP',
                               renderer: rowData =>
                                   <TextField className="sbp"
                                              value={rowData.systolicBloodPressure}
                                              onChange={value => self.updateField(rowData.id, 'systolicBloodPressure', value)}/>
                           }, {
                               header: 'DBP',
                               renderer: rowData =>
                                   <TextField className="dbp"
                                              value={rowData.diastolicBloodPressure}
                                              onChange={value => self.updateField(rowData.id, 'diastolicBloodPressure', value)}/>
                           }, {
                               header: 'Heart Rate',
                               renderer: rowData =>
                                   <TextField className="heart-rate"
                                              value={rowData.heartRate}
                                              onChange={value => self.updateField(rowData.id, 'heartRate', value)}/>
                           }, {
                               header: 'SPO2',
                               renderer: rowData =>
                                   <TextField className="spo2"
                                              value={rowData.pulseOxygenSaturation}
                                              onChange={value => self.updateField(rowData.id, 'pulseOxygenSaturation', value)}/>
                           }]}
                           data={$analgesiaData}
                           isPagging={false}/>
                </div>

                {
                    errorMsg ?
                        <Msg type={Msg.Type.ERROR}>
                            {errorMsg}
                        </Msg>
                        :
                        null
                }

                <StepAction onPrev={this.prevStep}
                            onNext={this.next}/>

            </div>
        );
    }
}

AnalgesiaData.propTypes = {

    $sensoryBlockList: PropTypes.array,
    $analgesiaData: PropTypes.array,

    routerPush: PropTypes.func,
    updateAddPatientStep: PropTypes.func,
    updateAnalgesiaDataField: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $sensoryBlockList: state.sensoryBlock.list,
        $analgesiaData: state.analgesiaData.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);