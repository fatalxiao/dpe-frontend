import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavMenu from '../menu/NavMenu';

import 'scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar">

                <div className="nav-bar-logo"></div>

                <NavMenu/>

            </div>
        );

    }
}

NavBar.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);