import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';

import 'scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar">

                <div className="nav-bar-top">

                    <IconButton className="nav-bar-item nav-bar-logo">
                        DPE
                    </IconButton>

                    <IconButton className="nav-bar-item"
                                iconCls="fa fa-search"/>

                    <IconButton className="nav-bar-item"
                                iconCls="fa fa-plus"/>

                </div>

                <div className="nav-bar-bottom">

                </div>

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