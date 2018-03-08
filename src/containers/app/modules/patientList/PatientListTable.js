import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import Table from 'alcedo-ui/Table';

import 'scss/containers/app/modules/patientList/PatientListTable.scss';

class PatientListTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table className="patient-list-table"
                   columns={[{
                       header: 'ID',
                       sortable: true,
                       sortProp: 'id',
                       renderer: 'id'
                   }, {
                       header: 'ID',
                       sortable: true,
                       sortProp: 'id',
                       renderer: 'id'
                   }]}/>
        );
    }
}

PatientListTable.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientListTable);