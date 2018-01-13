import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavMenuList from './NavMenuList';
import RaisedButton from 'alcedo-ui/RaisedButton';
import Theme from 'alcedo-ui/Theme';

import 'scss/containers/app/nav/menu/NavMenu.scss';

class NavMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isToggleButtonVisible: false
        };

        this.navMenuMouseOverHandler = ::this.navMenuMouseOverHandler;
        this.navMenuMouseOutHandler = ::this.navMenuMouseOutHandler;
        this.toggleButtonTouchTapHandler = ::this.toggleButtonTouchTapHandler;

    }

    navMenuMouseOverHandler() {
        this.setState({
            isToggleButtonVisible: true
        });
    }

    navMenuMouseOutHandler() {
        this.setState({
            isToggleButtonVisible: false
        });
    }

    toggleButtonTouchTapHandler() {
        this.setState({
            isToggleButtonVisible: false
        }, () => {
            const {toggleNavMenu} = this.props;
            toggleNavMenu();
        });
    }

    render() {

        const {$navMenuCollapsed} = this.props,
            {isToggleButtonVisible} = this.state,

            toggleButtonClassName = ($navMenuCollapsed ? ' collapsed' : ' expanded')
                + (isToggleButtonVisible ? '' : ' hidden');

        return (
            <div className="nav-menu"
                 onMouseOver={this.navMenuMouseOverHandler}
                 onMouseOut={this.navMenuMouseOutHandler}>

                <NavMenuList/>

                <RaisedButton className={'nav-menu-toggle-button' + toggleButtonClassName}
                              theme={$navMenuCollapsed ? Theme.PRIMARY : Theme.HIGHLIGHT}
                              iconCls="icon icon-dropdown"
                              onTouchTap={this.toggleButtonTouchTapHandler}/>

            </div>
        );

    }
}

NavMenu.propTypes = {

    $navMenuCollapsed: PropTypes.bool,

    toggleNavMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navMenuCollapsed: state.navMenu.navMenuCollapsed
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);