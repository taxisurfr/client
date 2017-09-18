import React from 'react'
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';

var show = {border: 'none'};

export const renderSurfboardCountSelector = ({input, meta: {touched, error}}) => (
    <div style={show} className="mui--text-left">
        <Select defaultValue="2" {...input} label="No. surfboards">
            <Option value="0" label="no surfboards"/>
            <Option value="1" label="1 surfboard"/>
            <Option value="2" label="2 surfboards"/>
            <Option value="3" label="3 surfboards"/>
            <Option value="4" label="4 surfboards"/>
            <Option value="5" label="5 surfboards"/>
        </Select>
    </div>
)

export default renderSurfboardCountSelector
