import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';

import IconButton from 'alcedo-ui/IconButton';

import menu from 'src/config.menu';

import 'scss/containers/app/nav/bar/NavMenu.scss';

class NavMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {routerPush} = this.props;

        return (
            <div className="nav-menu">

                {
                    menu.map((item, index) => (
                        <IconButton key={index}
                                    className="nav-bar-item"
                                    iconCls={item.iconCls}
                                    tip={item.tip}
                                    tipPosition={IconButton.TipPosition.RIGHT}
                                    onTouchTap={() => {
                                        item.route && routerPush(item.route);
                                    }}/>
                    ))
                }

            </div>
        );

    }
}

NavMenu.propTypes = {

    routerPush: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);