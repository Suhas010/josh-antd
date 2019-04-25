import React from 'react';
import { Tooltip as JTooltip } from 'antd';
import PropTypes from 'prop-types';
/**
 *
 *
 * @export
 * @param {*} { title, children }
 * @returns
 */
export default function Tooltip ({ title, children }){
    return (
        <JTooltip title={title}>
            {children}
        </JTooltip>
    );
};

Tooltip.propTypes = {
    /** Tooltip Title */
    title: PropTypes.string,
    children: PropTypes.node
};
  
