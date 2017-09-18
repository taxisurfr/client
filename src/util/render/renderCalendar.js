import React from 'react'
import RW from 'react-widgets';

var errorstyle = {
    color: 'red'
};
const styleBackground = {border:'none',backgroundColor: 'HoneyDew'};

export const renderCalendar = ({input,label, meta: {touched, error}}) => {
    const selected = input.value ? new Date(input.value) : null;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return (
        <div>
            <div className="mui--text-left">
                <div className="mui--text-headline">Date of pickup</div>
                <RW.Calendar style={styleBackground} {...input} value={selected} culture='en' min={tomorrow}/>
                {touched && error && <span style={errorstyle}>{error}</span>}
            </div>
        </div>
    );
}

export const renderShuttleCalendar = ({input,label, meta: {touched, error}}) => {
    const selected = input.value ? new Date(input.value) : null;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3);
    const max = new Date("August 20, 2017");
    return (
        <div>
            <div className="mui--text-left">
                <div className="mui--text-title">*Dates are limited.*</div>
                <RW.Calendar style={styleBackground} {...input} value={selected} culture='en' min={tomorrow} max={max}/>
                {touched && error && <span style={errorstyle}>{error}</span>}
            </div>
        </div>
    );
}


export default renderCalendar


