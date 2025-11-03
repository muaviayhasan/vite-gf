import React from 'react';

// countdown renderer for comming soon
export const rendererOne = ({days, hours, minutes, seconds}) => (
    <span className="count-row countdown-show4">
        <span className="countdown-section">
            <span className="countdown-amount">{ days }</span>
            <span className="countdown-period">Days</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ hours }</span>
            <span className="countdown-period">Hours</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ minutes }</span>
            <span className="countdown-period">Minutes</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ seconds }</span>
            <span className="countdown-period">Seconds</span>
        </span>
    </span>
);

// countdown renderer type 2
export const rendererTwo = ({days, hours, minutes, seconds}) => (
    <span className="countdown-row countdown-amount">
        { days } days, { hours } : { minutes } : { seconds }
    </span>
);

// countdown renderer type 3
export const rendererThree = ({days, hours, minutes, seconds}) => (
    <span class="countdown-row countdown-show3">
        <span class="countdown-section">
            <span class="countdown-amount">{ hours }</span>
            <span class="countdown-period">hours</span>
        </span>
        <span class="countdown-section">
            <span class="countdown-amount">{ minutes }</span>
            <span class="countdown-period">mins</span>
        </span>
        <span class="countdown-section">
            <span class="countdown-amount">{ seconds }</span>
            <span class="countdown-period">secs</span>
        </span>
    </span>
);

// deal countdown renderer type1
// export const rendererFour = ({days, hours, minutes, seconds}) => (

// );