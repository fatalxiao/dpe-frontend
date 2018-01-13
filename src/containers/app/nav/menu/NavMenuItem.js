import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import RaisedButton from 'alcedo-ui/RaisedButton';
import Popup from 'alcedo-ui/Popup';
import Theme from 'alcedo-ui/Theme';

import 'scss/containers/app/nav/menu/NavMenuItem.scss';

export default class NavMenuItem extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popupVisible: false
        };

        this.menuGroupMouseDownHandler = ::this.menuGroupMouseDownHandler;
        this.menuMouseDownHandler = ::this.menuMouseDownHandler;
        this.closePopup = ::this.closePopup;

    }

    menuGroupMouseDownHandler() {

        const {navMenuCollapsed, expandedMenu, options, expandMenu, collapseMenu} = this.props;

        if (navMenuCollapsed) {

            const flag = !this.state.popupVisible;

            this.setState({
                popupVisible: flag
            }, () => {
                if (flag) {
                    expandMenu(options);
                }
            });

        } else {
            if (expandedMenu && expandedMenu.text === options.text) {
                collapseMenu();
            } else {
                expandMenu(options);
            }
        }

    }

    menuMouseDownHandler() {
        const {options, updateActivatedMenu, navMenuCollapsed, collapseMenu} = this.props;
        updateActivatedMenu(options);
        navMenuCollapsed && collapseMenu();
    }

    closePopup() {
        this.setState({
            popupVisible: false
        }, () => {
            const {navMenuCollapsed, collapseMenu} = this.props;
            navMenuCollapsed && collapseMenu();
        });
    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.navMenuCollapsed !== this.props.navMenuCollapsed) {
            this.setState({
                popupVisible: false
            });
        }
    }

    render() {

        const {
                isLast, activatedMenuParent, activatedMenu, expandedMenu, navMenuCollapsed, options, depth,
                expandMenu, collapseMenu, updateActivatedMenu
            } = this.props,
            {popupVisible} = this.state,

            hasChildren = options.children && options.children.length > 0,
            activated = hasChildren ?
                activatedMenuParent && activatedMenuParent.text === options.text
                :
                activatedMenu && activatedMenu.text && options.text
                && activatedMenu.text === options.text,

            expanded = expandedMenu && expandedMenu.text === options.text,

            className = (hasChildren ? (expanded ? '' : ' collapsed') : '');

        return (
            <div className={'nav-menu-item' + className}>

                {/* title or link */}
                {
                    hasChildren ?
                        (
                            <RaisedButton ref="trigger"
                                          className="nav-menu-item-title"
                                          theme={activated || expanded ? Theme.HIGHLIGHT : Theme.PRIMARY}
                                          value={options.text}
                                          iconCls={options.iconCls}
                                          rightIconCls={'icon icon-dropdown' + (expanded ? '' : ' collapsed')}
                                          disabled={options.disabled}
                                          onTouchTap={this.menuGroupMouseDownHandler}/>
                        )
                        :
                        (
                            <Link className="nav-menu-item-link"
                                  to={options.route}
                                  replace>

                                <RaisedButton className={'nav-menu-item-title' + (activated ? ' activated' : '')}
                                              theme={activated ? Theme.HIGHLIGHT : (navMenuCollapsed && depth > 0 ? Theme.HIGHLIGHT : Theme.PRIMARY)}
                                              value={options.text}
                                              iconCls={options.iconCls}
                                              disabled={options.disabled}
                                              onTouchTap={this.menuMouseDownHandler}/>

                            </Link>
                        )
                }

                {/* sub menu */}
                {
                    hasChildren ?
                        (
                            navMenuCollapsed ?
                                (
                                    <Popup className="nav-menu-children-popup"
                                           position={Popup.Position.RIGHT_TOP}
                                           triggerEl={this.triggerEl}
                                           visible={popupVisible}
                                           hasTriangle={false}
                                           isTriggerPositionFixed={true}
                                           onRequestClose={this.closePopup}>

                                        <div className="nav-menu-children-popup-title">
                                            {options.text}
                                        </div>

                                        {
                                            options.children.map((item, index) => {
                                                return (
                                                    <NavMenuItem key={index}
                                                                 activatedMenuParent={activatedMenuParent}
                                                                 activatedMenu={activatedMenu}
                                                                 expandedMenu={expandedMenu}
                                                                 navMenuCollapsed={navMenuCollapsed}
                                                                 options={item}
                                                                 depth={depth + 1}
                                                                 expandMenu={expandMenu}
                                                                 collapseMenu={collapseMenu}
                                                                 updateActivatedMenu={updateActivatedMenu}/>
                                                );
                                            })
                                        }

                                    </Popup>
                                )
                                :
                                (
                                    <div className="nav-menu-children">
                                        {
                                            options.children.map((item, index) => {
                                                return (
                                                    <NavMenuItem key={index}
                                                                 activatedMenuParent={activatedMenuParent}
                                                                 activatedMenu={activatedMenu}
                                                                 expandedMenu={expandedMenu}
                                                                 navMenuCollapsed={navMenuCollapsed}
                                                                 options={item}
                                                                 depth={depth + 1}
                                                                 expandMenu={expandMenu}
                                                                 collapseMenu={collapseMenu}
                                                                 updateActivatedMenu={updateActivatedMenu}/>
                                                );
                                            })
                                        }
                                    </div>
                                )
                        )
                        :
                        null
                }

            </div>
        );

    }
}

NavMenuItem.propTypes = {

    activatedMenuParent: PropTypes.object,
    activatedMenu: PropTypes.object,
    expandedMenu: PropTypes.object,
    navMenuCollapsed: PropTypes.bool,

    options: PropTypes.object,
    depth: PropTypes.number,

    expandMenu: PropTypes.func,
    collapseMenu: PropTypes.func,
    updateActivatedMenu: PropTypes.func

};

NavMenuItem.defaultProps = {

    activatedMenuParent: null,
    activatedMenu: null,
    expandedMenu: null,
    navMenuCollapsed: false,

    options: null,
    depth: 0

};