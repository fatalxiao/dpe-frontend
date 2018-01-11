import * as types from 'reduxes/actionTypes';
import DEFAULT_MENU from 'src/config.menu';
import Util from 'vendors/Util';

const {activatedMenu, activatedMenuParent} = Util.getActivatedMenu(),
    initialState = {

        menu: DEFAULT_MENU,

        navMenuCollapsed: localStorage.getItem('navMenuCollapsed') === '1',

        activatedMenu,
        activatedMenuParent,

        expandedMenu: activatedMenuParent

    };

function navMenu(state = initialState, action) {
    switch (action.type) {

        case types.COLLAPSE_NAV_MENU: {

            localStorage.setItem('navMenuCollapsed', '1');

            return {
                ...state,
                navMenuCollapsed: true
            };

        }

        case types.EXPAND_NAV_MENU: {

            localStorage.setItem('navMenuCollapsed', '0');

            return {
                ...state,
                navMenuCollapsed: false
            };

        }

        case types.TOGGLE_NAV_MENU: {

            const navMenuCollapsed = !state.navMenuCollapsed;
            localStorage.setItem('navMenuCollapsed', navMenuCollapsed ? '1' : '0');

            return {
                ...state,
                navMenuCollapsed
            };

        }

        case types.EXPAND_MENU: {
            return {
                ...state,
                expandedMenu: action.menu
            };
        }

        case types.COLLAPSE_MENU: {
            return {
                ...state,
                expandedMenu: null
            };
        }

        case types.UPDATE_ACTIVATED_MENU: {
            return {
                ...state,
                ...Util.getActivatedMenu(DEFAULT_MENU, action.activatedMenu.route)
            };
        }

        case types.REFRESH_ACTIVATED_MENU: {
            return {
                ...state,
                ...Util.getActivatedMenu()
            };
        }

        default:
            return state;

    }
}

export default navMenu;