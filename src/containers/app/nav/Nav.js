import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavBar from './bar/NavBar';
import Patients from './patients/NavPatient';

import 'scss/containers/app/nav/Nav.scss';

class Nav extends Component {

    constructor(props) {

        super(props);

        this.minWidth = 304;
        this.collapsedWidth = 64;

        this.state = {
            navWidth: this.minWidth
        };

    }

    render() {

        const {$navCollapsed, toggleNav} = this.props,
            {navWidth} = this.state,

            wrapperClassName = ($navCollapsed ? ' collapsed' : ''),
            toggleIconClassName = ($navCollapsed ? 'icon-chevron-thin-right' : 'icon-chevron-thin-left'),

            style = {
                width: $navCollapsed ? this.collapsedWidth : navWidth
            };

        return (
            <div className={'nav' + wrapperClassName}
                 style={style}>

                <div className="nav-inner"
                     style={style}>

                    <NavBar/>

                    <Patients/>

                    <div className="nav-toggle">
                        <i className={toggleIconClassName + ' nav-toggle-icon'}
                           onTouchTap={toggleNav}></i>
                    </div>

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