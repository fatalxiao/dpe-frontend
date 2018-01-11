import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';
import NavUser from './user/NavUser';

import 'src/assets/scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {routerPush} = this.props;

        return (
            <div className="nav-bar">

                <div className="nav-bar-right">

                    {/*<IconButton className="nav-bar-home"*/}
                    {/*iconCls="icon icon-ico-home"*/}
                    {/*onTouchTap={() => {*/}
                    {/*routerPush('/');*/}
                    {/*}}/>*/}

                    {/*<IconButton className="nav-bar-help"*/}
                    {/*iconCls="icon icon-ico-help"*/}
                    {/*onTouchTap={() => {*/}
                    {/*routerPush('/help');*/}
                    {/*}}/>*/}

                    {/*<IconButton className="nav-bar-notice"*/}
                    {/*iconCls="icon icon-notification"*/}
                    {/*onTouchTap={() => {*/}
                    {/*routerPush('/notice');*/}
                    {/*}}>*/}
                    {/*<div className="nav-bar-notice-dot"></div>*/}
                    {/*</IconButton>*/}

                    <div className="nav-bar-separator"></div>

                    <NavUser/>

                </div>

            </div>
        );
    }
}

NavBar.propTypes = {
    routerPush: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);