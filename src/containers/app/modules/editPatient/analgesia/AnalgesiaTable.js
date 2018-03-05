import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';
import Checkbox from 'alcedo-ui/Checkbox';
import TextField from 'customized/CustomizedMaterialTextField';
import DropdownSelect from 'customized/CustomizedMaterialDropdownSelect';

import 'scss/containers/app/modules/editPatient/analgesiaData/AnalgesiaTable.scss';

class AnalgesiaTable extends Component {

    constructor(props) {

        super(props);

        this.updateField = ::this.updateField;

    }

    updateField(id, fieldName, fieldValue) {
        const {updateAnalgesiaDataField, onUpdateField} = this.props;
        updateAnalgesiaDataField(id, fieldName, fieldValue);
        onUpdateField && onUpdateField();
    }

    render() {

        const {$sensoryBlockList, $analgesiaData} = this.props,
            self = this;

        return (
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
                               <Checkbox checked={rowData.hasContraction}
                                         onChange={value => self.updateField(rowData.timePoint, 'hasContraction', value)}/>
                       }, {
                           header: 'Vas',
                           renderer: rowData =>
                               <TextField value={rowData.vasScore || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'vasScore', value)}/>
                       }, {
                           header: 'TSB',
                           renderer: rowData =>
                               <div>
                                   <label>L: </label>
                                   <DropdownSelect data={$sensoryBlockList}
                                                   value={rowData.thoracicSensoryBlockLeft}
                                                   valueField="value"
                                                   displayField="name"
                                                   onChange={value => self.updateField(rowData.timePoint, 'thoracicSensoryBlockLeft', value)}/>
                                   <label>, R: </label>
                                   <DropdownSelect data={$sensoryBlockList}
                                                   value={rowData.thoracicSensoryBlockRight}
                                                   valueField="value"
                                                   displayField="name"
                                                   onChange={value => self.updateField(rowData.timePoint, 'thoracicSensoryBlockRight', value)}/>
                               </div>
                       }, {
                           header: 'SSB',
                           renderer: rowData =>
                               <div>
                                   <label>L: </label>
                                   <DropdownSelect data={$sensoryBlockList}
                                                   value={rowData.sacralSensoryBlockLeft}
                                                   valueField="sensoryBlockValue"
                                                   displayField="sensoryBlockName"
                                                   onChange={value => self.updateField(rowData.timePoint, 'sacralSensoryBlockLeft', value)}/>
                                   <label>, R: </label>
                                   <DropdownSelect data={$sensoryBlockList}
                                                   value={rowData.sacralSensoryBlockRight}
                                                   valueField="sensoryBlockValue"
                                                   displayField="sensoryBlockName"
                                                   onChange={value => self.updateField(rowData.timePoint, 'sacralSensoryBlockRight', value)}/>
                               </div>
                       }, {
                           header: 'Bromage',
                           renderer: rowData =>
                               <TextField value={rowData.bromageScore || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'bromageScore', value)}/>
                       }, {
                           header: 'SBP',
                           renderer: rowData =>
                               <TextField value={rowData.systolicBloodPressure || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'systolicBloodPressure', value)}/>
                       }, {
                           header: 'DBP',
                           renderer: rowData =>
                               <TextField value={rowData.diastolicBloodPressure || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'diastolicBloodPressure', value)}/>
                       }, {
                           header: 'Heart Rate',
                           renderer: rowData =>
                               <TextField value={rowData.heartRate || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'heartRate', value)}/>
                       }, {
                           header: 'SPO2',
                           renderer: rowData =>
                               <TextField value={rowData.pulseOxygenSaturation || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'pulseOxygenSaturation', value)}/>
                       }, {
                           header: 'FHR',
                           renderer: rowData =>
                               <TextField value={rowData.fetalHeartRate || ''}
                                          onChange={value => self.updateField(rowData.timePoint, 'fetalHeartRate', value)}/>
                       }]}
                       data={$analgesiaData}
                       isPagging={false}/>
            </div>
        );
    }
}

AnalgesiaTable.propTypes = {

    $sensoryBlockList: PropTypes.array,
    $analgesiaData: PropTypes.array,

    updateAnalgesiaDataField: PropTypes.func,
    onUpdateField: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $sensoryBlockList: state.sensoryBlock.list,
        $analgesiaData: state.analgesia.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalgesiaTable);