import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';
import * as types from 'reduxes/actionTypes/index';

import FlatButton from 'alcedo-ui/FlatButton';
import NavUserPopup from './NavUserPopup';

import 'src/assets/scss/containers/app/nav/bar/user/NavUser.scss';

class NavUser extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popupVisible: false
        };

        this.showPopup = ::this.showPopup;
        this.hidePopup = ::this.hidePopup;

    }

    showPopup() {
        this.setState({
            popupVisible: !this.state.popupVisible
        });
    }

    hidePopup() {
        this.setState({
            popupVisible: false
        });
    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    render() {

        const {$profile, $actionType} = this.props,
            {popupVisible} = this.state;

        return (
            <div className="nav-user">

                <FlatButton ref="trigger"
                            className="nav-user-trigger"
                            renderer={() => {
                                return $profile ?
                                    (
                                        <div className="nav-user-content">
                                            {/*<img className="nav-user-avatar"*/}
                                            {/*src={require(`assets/images/${$profile.avatar}.png`)}></img>*/}
                                            <div className="nav-user-info">
                                                <div className="nav-user-name">{$profile.username}</div>
                                                <div className="nav-user-email">{$profile.email}</div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    null;
                            }}
                            rightIconCls={'icon icon-dropdown'}
                            isLoading={$actionType === types.GET_USER_PROFILE_REQUEST}
                            onTouchTap={this.showPopup}/>

                <NavUserPopup visible={popupVisible}
                              triggerEl={this.triggerEl}
                              onRequestClose={this.hidePopup}/>

            </div>
        );
    }
}

NavUser.propTypes = {
    $profile: PropTypes.object,
    $actionType: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        $profile: state.user.profile,
        $actionType: state.user.actionType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavUser);