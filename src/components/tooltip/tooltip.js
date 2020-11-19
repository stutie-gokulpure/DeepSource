import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./tooltip.scss";

/**
 * Tooltip wrapper component which wraps any child element.
 *
 * @param delay time taken to display the tooltip
 * @param direction direction of the tooltip
 * @param label tooltip text to display
 * @param width specific width of the tooltip
 * @param children child element
 * @returns {*}
 * @constructor
 */
const Tooltip = ({ delay, direction, label, width, children }) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div className="tooltip-wrapper" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`tooltip-tip ${direction}`} style={{ width }}>
                    {label}
                </div>
            )}
        </div>
    );
};

Tooltip.propTypes = {
    children: PropTypes.element.isRequired,
    label: PropTypes.string,
    direction: PropTypes.string,
    delay: PropTypes.number,
    width: PropTypes.string
};

Tooltip.defaultProps = {
    direction: 'top',
    label: '',
    delay: 500,
    width: 'fit-content'
};

export default Tooltip;
