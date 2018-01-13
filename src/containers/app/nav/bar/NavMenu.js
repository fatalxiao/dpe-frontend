import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import IconButton from 'alcedo-ui/IconButton';

import menu from 'src/config.menu';

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
            <div className="nav-menu">

                {
                    menu.map((item, index) => (
                        <IconButton key={index}
                                    className="nav-bar-item"
                                    iconCls={item.iconCls}
                                    tip={item.tip}
                                    tipPosition={IconButton.TipPosition.RIGHT}/>
                    ))
                }

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