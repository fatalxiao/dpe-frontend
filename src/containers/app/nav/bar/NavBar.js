import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import 'src/assets/scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {routerPush} = this.props;

        return (
            <div className="nav-bar">

                <div className="nav-bar-right">

                </div>

            </div>
        );
    }
}

NavBar.propTypes = {
    routerPush: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);