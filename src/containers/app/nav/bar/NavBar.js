import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'alcedo-ui/IconButton';

import {DEFAULT_ROUTE} from 'src/config.routes';

import 'scss/containers/app/nav/bar/NavBar.scss';

class NavBar extends Component {

    constructor(props) {

        super(props);

        this.goToLanding = ::this.goToLanding;

    }

    goToLanding() {
        this.props.routerPush(DEFAULT_ROUTE);
    }

    render() {
        return (
            <div className="nav-bar">

                <div className="nav-bar-top">

                    <IconButton className="nav-bar-item nav-bar-logo"
                                onTouchTap={this.goToLanding}>
                        DPE
                    </IconButton>

                    <IconButton className="nav-bar-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
                            <path
                                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                                fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </IconButton>

                    <IconButton className="nav-bar-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
                            <path
                                d="M13 11V3.993A.997.997 0 0 0 12 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 0 0 3 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0 0 21 12c0-.556-.445-1-.993-1H13z"
                                fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </IconButton>

                </div>

                <div className="nav-bar-bottom">

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