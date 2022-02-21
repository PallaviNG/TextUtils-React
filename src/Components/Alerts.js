import React from 'react'

function Alerts({ alert }) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div>
            {/* props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> */}
            {
                 alert  ?
                    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalize(alert.type)}</strong>: {alert.message}
                    </div> : null
            }
        </div>
    )
}

export default Alerts