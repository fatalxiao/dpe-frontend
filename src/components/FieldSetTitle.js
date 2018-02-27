import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import 'scss/components/FieldSetTitle.scss';

export default class FieldSet extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, title, ...restProps} = this.props,

            wrapperClassName = classNames('field-set-title', {
                [className]: className
            });

        return (
            <h3 {...restProps}
                className={wrapperClassName}>
                {title}
                {children}
            </h3>
        );
    }
}