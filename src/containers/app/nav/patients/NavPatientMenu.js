import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';

import 'scss/containers/app/nav/patients/NavPatientMenu.scss';

class NavPatientCollapsed extends Component {

    constructor(props) {

        super(props);

        this.goToList = ::this.goToList;

    }

    goToList() {
        this.props.routerPush('/app/patient-list');
    }

    render() {
        return (
            <div className="nav-patient-menu">
                <IconButton className="all-patients-menu-item"
                            iconCls="icon-list"
                            tip="All Patients"
                            tipPosition={IconButton.TipPosition.RIGHT}
                            onTouchTap={this.goToList}/>
            </div>
        );
    }
}

NavPatientCollapsed.propTypes = {

    isFold: PropTypes.bool,

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPatientCollapsed);