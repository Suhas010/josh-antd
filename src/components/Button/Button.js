import React from 'react';
import { Button as JButton } from 'antd';
import PropTypes from 'prop-types';
import JTooltip from '../Tooltip/Tooltip';


/**
 * Button.
 */

export function Button ({ name, type, onClick, tooltip, ...rest}) {
    return (
        <JTooltip title={tooltip}>
            <JButton
                type={type}
                onClick={onClick}
                {...rest}
                >
                {name}
            </JButton>
        </JTooltip>
    );
}

Button.propTypes = {
    /** Button Name */
    name: PropTypes.string,
    /** Button Type */
    type: PropTypes.oneOf(['default', 'primary', 'danger', 'ghost', 'dashed']),
    size: PropTypes.oneOf(['default', 'small', 'large']),
    shape: PropTypes.oneOf(['default', 'circle', 'round']),
    loading: PropTypes.oneOf([true, false]),
};

Button.defaultProps = {
    name: '',
    type: 'default',
    size: 'default',
    shape: 'default',
    loading: false,
}
export default Button;

