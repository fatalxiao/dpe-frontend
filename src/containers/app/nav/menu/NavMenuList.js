import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavMenuItem from './NavMenuItem';

import Event from 'vendors/Event';

import 'scss/containers/app/nav/menu/NavMenuList.scss';

class NavMenuList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {
            $navMenu, $activatedMenuParent, $activatedMenu, $expandedMenu, $navMenuCollapsed,
            expandMenu, collapseMenu, updateActivatedMenu
        } = this.props;

        return (
            <div className="nav-menu-list"
                 onWheel={Event.preventContainerScroll}>
                <div className="nav-menu-scroller">
                    {
                        $navMenu.map((menu, index) => {
                            return (
                                <NavMenuItem key={(menu && menu.text) || index}
                                             isLast={index === $navMenu.length - 1}
                                             activatedMenuParent={$activatedMenuParent}
                                             activatedMenu={$activatedMenu}
                                             expandedMenu={$expandedMenu}
                                             options={menu}
                                             navMenuCollapsed={$navMenuCollapsed}
                                             expandMenu={expandMenu}
                                             collapseMenu={collapseMenu}
                                             updateActivatedMenu={updateActivatedMenu}/>
                            );
                        })
                    }
                </div>
            </div>
        );

    }
}

NavMenuList.propTypes = {

    $navMenu: PropTypes.array,
    $activatedMenuParent: PropTypes.object,
    $activatedMenu: PropTypes.object,
    $expandedMenu: PropTypes.object,
    $navMenuCollapsed: PropTypes.bool,

    expandMenu: PropTypes.func,
    collapseMenu: PropTypes.func,
    updateActivatedMenu: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navMenu: state.navMenu.menu,
        $activatedMenuParent: state.navMenu.activatedMenuParent,
        $activatedMenu: state.navMenu.activatedMenu,
        $expandedMenu: state.navMenu.expandedMenu,
        $navMenuCollapsed: state.navMenu.navMenuCollapsed
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuList);