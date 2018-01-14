import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MaterialTextField from 'alcedo-ui/MaterialTextField';
import Theme from 'alcedo-ui/Theme';

export default class CustomizedMaterialTextField extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {theme, isLabelAnimate, ...restProps} = this.props;

        return (
            <MaterialTextField {...restProps}
                               theme={theme}
                               isLabelAnimate={isLabelAnimate}/>
        );
    }

}

CustomizedMaterialTextField.propTypes = {
    theme: PropTypes.any,
    isLabelAnimate: PropTypes.bool
};

CustomizedMaterialTextField.defaultProps = {
    theme: Theme.HIGHLIGHT,
    isLabelAnimate: false
};