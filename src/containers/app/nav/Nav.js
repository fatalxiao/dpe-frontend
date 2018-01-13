import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavBar from './bar/NavBar';
import Patients from './patients/Patients';

import 'scss/containers/app/nav/Nav.scss';

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {$navCollapsed, toggleNav} = this.props,

            navClassName = ($navCollapsed ? ' collapsed' : ''),

            toggleIconClassName = ($navCollapsed ? 'fa-angle-right' : 'fa-angle-left');

        return (
            <div className={'nav' + navClassName}>

                <NavBar/>

                <Patients/>

                <div className="nav-toggle"
                     onTouchTap={toggleNav}>
                    <i className={'fa ' + toggleIconClassName + ' nav-toggle-icon'}></i>
                </div>

            </div>
        );
    }
}

Nav.propTypes = {

    $navCollapsed: PropTypes.bool,

    toggleNav: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $navCollapsed: state.nav.collapsed
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);