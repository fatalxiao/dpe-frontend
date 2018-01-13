import * as types from 'reduxes/actionTypes';

export const collapseNav = () => ({
    type: types.COLLAPSE_NAV
});

export const expandNav = () => ({
    type: types.EXPAND_NAV
});

export const toggleNav = () => ({
    type: types.TOGGLE_NAV
});