import React from 'react'
import Input from 'muicss/lib/react/input';
import Select from 'muicss/lib/react/select';

export const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

var style = {
    color: 'red'
};

var show = {border:'none', backgroundColor: 'white'};
var label = {};

export const renderInput = ({hint, input, label, type, readOnly, meta: {touched, error}}) => (
    <div className="mui--text-left">
        <Input {...input} floatingLabel={true} label={label} readOnly={readOnly}/>
        {touched && error && <span style={style}>{error}</span>}
    </div>
)

export const renderInputShuttle = ({hint, input, label, type, readOnly, meta: {touched, error}}) => (
    <div className="mui--text-left">
        <div style={show} className="mui--text-left">
            <Select defaultValue="2" {...input} label="No. surfboards">
                <Option value="10:00" label="10:00"/>
                <Option value="14:00" label="14:00"/>
                <Option value="18:00" label="18:00"/>
                <Option value="22:00" label="22:00"/>
            </Select>
        </div>
    </div>
)

export const renderError = ({meta: {touched, error}}) => touched && error ?
    <span style={style}>{error}</span> : false

export default renderField
