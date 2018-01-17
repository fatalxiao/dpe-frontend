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
    }

    render() {

        const {$navCollapsed, toggleNav} = this.props,

            wrapperClassName = ($navCollapsed ? ' collapsed' : ''),
            toggleIconClassName = ($navCollapsed ? 'icon-chevron-thin-right' : 'icon-chevron-thin-left');

        return (
            <div className={'nav' + wrapperClassName}>

                <div className="nav-inner">

                    <NavBar/>

                    <Patients/>

                    <div className="nav-toggle"
                         onTouchTap={toggleNav}>
                        <i className={toggleIconClassName + ' nav-toggle-icon'}></i>
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