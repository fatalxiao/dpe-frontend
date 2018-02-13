import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';

import {DEFAULT_ROUTE} from 'src/config.routes';

import 'scss/containers/app/nav/bar/NavBarTop.scss';

class NavBarTop extends Component {

    constructor(props) {

        super(props);

        this.goToLanding = ::this.goToLanding;
        this.addPatient = ::this.addPatient;

    }

    goToLanding() {
        this.props.routerPush(DEFAULT_ROUTE);
    }

    addPatient() {
        this.props.routerPush('/app/add-patient');
    }

    render() {

        const {children} = this.props;

        return (
            <div className="nav-bar-top">

                <IconButton className="nav-bar-item nav-bar-logo-button"
                            iconCls="icon-circle"
                            onTouchTap={this.goToLanding}>
                </IconButton>

                <IconButton className="nav-bar-item"
                            iconCls="icon-magnifying-glass">
                </IconButton>

                <IconButton className="nav-bar-item"
                            iconCls="icon-plus"
                            onTouchTap={this.addPatient}>
                </IconButton>

                {children}

            </div>
        );

    }
}

NavBarTop.propTypes = {
    routerPush: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarTop);