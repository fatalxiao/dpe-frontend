import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import NavMenu from './NavMenu';

import {DEFAULT_ROUTE} from 'src/config.routes';

import 'scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

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

        const {$navCollapsed} = this.props;

        return (
            <div className="nav-bar">

                <div className="nav-bar-top">

                    <IconButton className="nav-bar-item nav-bar-logo"
                                onTouchTap={this.goToLanding}>
                        DPE
                    </IconButton>

                    <IconButton className="nav-bar-item"
                                iconCls="icon-magnifying-glass">
                    </IconButton>

                    <IconButton className="nav-bar-item"
                                iconCls="icon-plus"
                                onTouchTap={this.addPatient}>
                    </IconButton>

                </div>

                {
                    $navCollapsed ?
                        <NavMenu/>
                        :
                        null

                }

                <div className="nav-bar-bottom">

                </div>

            </div>
        );

    }
}

NavBar.propTypes = {

    $navCollapsed: PropTypes.bool,

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navCollapsed: state.nav.collapsed
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);