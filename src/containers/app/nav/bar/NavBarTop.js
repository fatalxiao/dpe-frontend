import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import DownloadField from 'alcedo-ui/DownloadField';
import AddPatientDialog from 'containers/app/modules/editPatient/patientBaseInfo/AddPatientDialog';

import config from 'src/config';
import {DEFAULT_ROUTE} from 'src/config.routes';

import 'scss/containers/app/nav/bar/NavBarTop.scss';

class NavBarTop extends Component {

    constructor(props) {

        super(props);

        this.state = {
            addPatientDialogVisible: false
        };

        this.goToLanding = ::this.goToLanding;
        this.showAddPatient = ::this.showAddPatient;
        this.hideAddPatient = ::this.hideAddPatient;

    }

    goToLanding() {
        this.props.routerPush(DEFAULT_ROUTE);
    }

    showAddPatient() {
        this.setState({
            addPatientDialogVisible: true
        }, () => {
            this.props.resetPatientBaseInfo();
        });
    }

    hideAddPatient() {
        this.setState({
            addPatientDialogVisible: false
        });
    }

    export() {
        this.refs.downloadField.download();
    }

    exportLoadedHandler() {

    }

    render() {

        const {children, isFold} = this.props,
            {addPatientDialogVisible} = this.state,

            className = classNames('nav-bar-top', {
                fold: isFold
            });

        return (
            <div className={className}>

                <IconButton className="nav-bar-item nav-bar-logo-button"
                            onTouchTap={this.goToLanding}>
                    <div className="logo"/>
                    <div className="logo-animated"/>
                </IconButton>

                <IconButton className="nav-bar-item"
                            iconCls="icon-magnifying-glass"/>

                <IconButton className="nav-bar-item"
                            iconCls="icon-plus"
                            onTouchTap={this.showAddPatient}/>

                <IconButton className="nav-bar-item export"
                            iconCls="icon-download"
                            onTouchTap={this.export}/>

                <AddPatientDialog visible={addPatientDialogVisible}
                                  onRequestClose={this.hideAddPatient}/>

                <DownloadField ref="downloadField"
                               url={`${config.appBaseUrl}/patient/exportPatients`}
                               onLoad={this.exportLoadedHandler}/>

                {children}

            </div>
        );

    }
}

NavBarTop.propTypes = {

    isFold: PropTypes.bool,

    routerPush: PropTypes.func,
    resetPatientBaseInfo: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarTop);