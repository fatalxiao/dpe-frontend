import * as types from 'reduxes/actionTypes';

export const collapseNavMenu = () => ({
    type: types.COLLAPSE_NAV_MENU
});

export const expandNavMenu = () => ({
    type: types.EXPAND_NAV_MENU
});

export const toggleNavMenu = () => ({
    type: types.TOGGLE_NAV_MENU
});

export const expandMenu = menu => ({
    type: types.EXPAND_MENU,
    menu
});

export const collapseMenu = () => ({
    type: types.COLLAPSE_MENU
});

export const updateActivatedMenu = activatedMenu => ({
    type: types.UPDATE_ACTIVATED_MENU,
    activatedMenu
});

export const refreshActivatedMenu = () => ({
    type: types.REFRESH_ACTIVATED_MENU,
});