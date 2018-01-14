import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';

import 'scss/components/FieldSet.scss';

export default class FieldSet extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, ...restProps} = this.props;

        return (
            <div {...restProps}
                 className="field-set">

                {
                    Children.map(children, item => {
                        return (
                            <div className={'field-set-item'}
                                 style={{width: `${100 / Children.count(children)}%`}}>
                                {item}
                            </div>
                        );
                    })
                }

            </div>
        );
    }
}