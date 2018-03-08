import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';
import DropdownSelect from 'customized/CustomizedMaterialDropdownSelect';

import 'scss/containers/app/modules/patientList/PatientListTable.scss';

class PatientListTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$groupList, $patientList} = this.props;

        return (
            <Table className="patient-list-table"
                   data={$patientList}
                   columns={[{
                       header: 'ID',
                       sortable: true,
                       sortProp: 'id',
                       renderer: 'id'
                   }, {
                       header: 'Name',
                       sortable: true,
                       sortProp: 'name',
                       renderer: 'name'
                   }, {
                       header: 'Group',
                       sortable: true,
                       sortProp: 'groupId',
                       renderer(rowData) {
                           return <DropdownSelect data={$groupList}
                                                  valueField="id"
                                                  displayField="name"
                                                  value={rowData.group}/>;
                       }
                   }]}/>
        );
    }
}

PatientListTable.propTypes = {

    $groupList: PropTypes.array,
    $patientList: PropTypes.array

};

function mapStateToProps(state, ownProps) {
    return {
        $groupList: state.group.list,
        $patientList: state.patients.list
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientListTable);