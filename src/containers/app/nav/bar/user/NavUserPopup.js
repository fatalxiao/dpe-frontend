import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions/index';
import * as types from 'reduxes/actionTypes/index';

import List from 'alcedo-ui/List';
import CustomizedPopup from 'customized/CustomizedPopup';

import 'src/assets/scss/containers/app/nav/bar/user/NavUserPopup.scss';

class NavUserPopup extends Component {

    constructor(props) {

        super(props);

        this.downloadhelp = ::this.downloadhelp;

    }

    downloadhelp() {
        this.refs.helpDownloadField.click();
    }

    render() {

        const {$actionType, signOut, ...restProps} = this.props;

        const listData = [{
            text: 'Help',
            onTouchTap: this.downloadhelp
        }, List.LIST_SEPARATOR, {
            className: 'sign-out',
            text: 'Sign Out',
            isLoading: $actionType === types.SIGN_OUT_REQUEST || $actionType === types.SIGN_OUT_SUCCESS,
            onTouchTap: signOut
        }];

        return (
            <CustomizedPopup {...restProps}
                             className="nav-user-popup"
                             position={CustomizedPopup.Position.BOTTOM_RIGHT}
                             isTriggerPositionFixed={true}>

                <List data={listData}/>

                <a style={{opacity: 0, position: 'absolute', zIndex: -1}}
                   ref="helpDownloadField"
                   target="_blank"
                   href="https://s3-us-west-2.amazonaws.com/msm-bucket/Clicks/feed/user_guide/Feed_Manager_User_Guide.pdf"/>

            </CustomizedPopup>
        );
    }
}

NavUserPopup.propTypes = {

    visible: PropTypes.bool,
    triggerEl: PropTypes.object,
    onRequestClose: PropTypes.func,
    $actionType: PropTypes.string,

    signOut: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {
        $actionType: state.signOut.actionType
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavUserPopup);