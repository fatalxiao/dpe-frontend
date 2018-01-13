import * as types from 'reduxes/actionTypes';

const initialState = {
    collapsed: localStorage.getItem('navCollapsed') === '1'
};

function nav(state = initialState, action) {
    switch (action.type) {

        case types.COLLAPSE_NAV: {

            localStorage.setItem('navCollapsed', '1');

            return {
                ...state,
                collapsed: true
            };

        }

        case types.EXPAND_NAV: {

            localStorage.setItem('navCollapsed', '0');

            return {
                ...state,
                collapsed: false
            };

        }

        case types.TOGGLE_NAV: {

            const collapsed = !state.collapsed;
            localStorage.setItem('navCollapsed', collapsed ? '1' : '0');

            return {
                ...state,
                collapsed
            };

        }

        default:
            return state;

    }
}

export default nav;