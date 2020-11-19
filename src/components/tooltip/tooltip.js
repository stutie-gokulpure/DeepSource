import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./tooltip.scss";

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
