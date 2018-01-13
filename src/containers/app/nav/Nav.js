import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import NavBar from './bar/NavBar';

import 'scss/containers/app/nav/Nav.scss';

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
                <div className="nav-inner">
                    <NavBar/>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);