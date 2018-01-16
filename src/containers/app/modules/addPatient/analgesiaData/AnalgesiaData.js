import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';
import Checkbox from 'alcedo-ui/Checkbox';
import StepAction from 'components/StepAction';
import CustomizedMaterialTextField from 'customized/CustomizedMaterialTextField';
import CustomizedMaterialDropdownSelect from 'customized/CustomizedMaterialDropdownSelect';

import 'scss/containers/app/modules/addPatient/analgesiaData/AnalgesiaData.scss';

class AnalgesiaData extends Component {

    constructor(props) {

        super(props);

        this.prevStep = ::this.prevStep;
        this.save = ::this.save;

    }

    prevStep() {
        const {addPatientStepPrev, routerPush} = this.props;
        addPatientStepPrev();
        routerPush('/app/add-patient/patient-information');
    }

    save() {
        const {addPatientStepNext, routerPush} = this.props;
        addPatientStepNext();
        routerPush('/app/add-patient/observal-data');
    }

    render() {

        const {$data} = this.props;

        return (
            <div className="analgesia-data">

                <div className="analgesia-data-table-scroller">
                    <Table className="analgesia-data-table"
                           columns={[{
                               header: 'Time Point',
                               renderer: '${timePoint} min'
                           }, {
                               header: 'Has Contraction',
                               renderer(rowData) {
                                   return <Checkbox value={rowData.hasContraction}/>;
                               }
                           }, {
                               header: 'Vas Score',
                               renderer(rowData) {
                                   return <CustomizedMaterialTextField className="vas-score"
                                                                       value={rowData.vasScore}/>;
                               }
                           }, {
                               header: 'TSB',
                               renderer(rowData) {
                                   return <CustomizedMaterialDropdownSelect className="tsb"
                                                                            value={rowData.thoracicSensoryBlockLeft}/>;
                               }
                           }, {
                               header: 'SSB',
                               renderer(rowData) {
                                   return <CustomizedMaterialDropdownSelect className="ssb"
                                                                            value={rowData.sacralSensoryBlockLeft}/>;
                               }
                           }, {
                               header: 'Bromage Score',
                               renderer(rowData) {
                                   return <CustomizedMaterialTextField value={rowData.bromageScore}/>;
                               }
                           }, {
                               header: 'SBP',
                               renderer(rowData) {
                                   return <CustomizedMaterialTextField value={rowData.systolicBloodPressure}/>;
                               }
                           }, {
                               header: 'DBP',
                               renderer(rowData) {
                                   return <CustomizedMaterialTextField value={rowData.diastolicBloodPressure}/>;
                               }
                           }, {
                               header: 'Heart Rate',
                               renderer(rowData) {
                                   return <CustomizedMaterialTextField value={rowData.heartRate}/>;
                               }
                           }, {
                               header: 'SPO2',
                               renderer(rowData) {
                                   return <CustomizedMaterialTextField value={rowData.pulseOxygenSaturation}/>;
                               }
                           }]}
                           data={$data}
                           isPagging={false}/>
                </div>

                <StepAction onPrev={this.prevStep}
                            onNext={this.save}/>

            </div>
        );
    }
}

AnalgesiaData.propTypes = {

    $data: PropTypes.array,

    routerPush: PropTypes.func,
    addPatientStepPrev: PropTypes.func,
    addPatientStepNext: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $data: state.analgesiaData.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaData);