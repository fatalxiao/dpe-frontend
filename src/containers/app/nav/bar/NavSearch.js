import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';

import * as actions from 'reduxes/actions';

import Paper from 'alcedo-ui/Paper';

import 'scss/containers/app/nav/bar/NavSearch.scss';

class NavSearch extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {visible, onRequestClose} = this.props,

            className = classNames('nav-search-wrapper', {
                hidden: !visible
            });

        return (
            <div className={className}>
                <div className="nav-search-modal"
                     onTouchTap={onRequestClose}></div>
                <Paper className="nav-search"
                       nonRounded={true}
                       depth={6}>

                </Paper>
            </div>
        );

    }
}

NavSearch.propTypes = {

    visible: PropTypes.bool,

    onRequestClose: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);