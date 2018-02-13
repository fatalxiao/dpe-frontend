import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';
import Checkbox from 'alcedo-ui/Checkbox';
import StepAction from 'components/StepAction';
import TextField from 'customized/CustomizedMaterialTextField';
import DropdownSelect from 'customized/CustomizedMaterialDropdownSelect';

import 'scss/containers/app/modules/addPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.prevStep = ::this.prevStep;
        this.next = ::this.next;

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
        this.props.addPatientStepUpdate(1);
    }

    render() {

        const {$sensoryBlockList, $analgesiaData} = this.props;

        return (
            <div className="analgesia-data">

                <div className="analgesia-data-table-scroller">
                    <Table className="analgesia-data-table"
                           columns={[{
                               header: 'Time',
                               renderer(rowData) {
                                   return rowData.timePoint <= 60 ?
                                       `${rowData.timePoint} min`
                                       :
                                       `${rowData.timePoint / 60} h`;
                               }
                           }, {
                               header: 'Contraction',
                               renderer(rowData) {
                                   return <Checkbox value={rowData.hasContraction}/>;
                               }
                           }, {
                               header: 'Vas',
                               renderer(rowData) {
                                   return <TextField className="vas"
                                                     value={rowData.vasScore}/>;
                               }
                           }, {
                               header: 'TSB',
                               renderer(rowData) {
                                   return <DropdownSelect className="tsb"
                                                          data={$sensoryBlockList}
                                                          value={rowData.thoracicSensoryBlockLeft}
                                                          valueField="sensoryBlockValue"
                                                          displayField="sensoryBlockName"/>;
                               }
                           }, {
                               header: 'SSB',
                               renderer(rowData) {
                                   return <DropdownSelect className="ssb"
                                                          data={$sensoryBlockList}
                                                          value={rowData.sacralSensoryBlockLeft}
                                                          valueField="sensoryBlockValue"
                                                          displayField="sensoryBlockName"/>;
                               }
                           }, {
                               header: 'Bromage',
                               renderer(rowData) {
                                   return <TextField className="bromage"
                                                     value={rowData.bromageScore}/>;
                               }
                           }, {
                               header: 'SBP',
                               renderer(rowData) {
                                   return <TextField className="sbp"
                                                     value={rowData.systolicBloodPressure}/>;
                               }
                           }, {
                               header: 'DBP',
                               renderer(rowData) {
                                   return <TextField className="dbp"
                                                     value={rowData.diastolicBloodPressure}/>;
                               }
                           }, {
                               header: 'Heart Rate',
                               renderer(rowData) {
                                   return <TextField className="heart-rate"
                                                     value={rowData.heartRate}/>;
                               }
                           }, {
                               header: 'SPO2',
                               renderer(rowData) {
                                   return <TextField className="spo2"
                                                     value={rowData.pulseOxygenSaturation}/>;
                               }
                           }]}
                           data={$analgesiaData}
                           isPagging={false}/>
                </div>

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
    addPatientStepUpdate: PropTypes.func

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