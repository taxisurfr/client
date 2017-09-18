import React from 'react'
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';

var show = {border:'none'};

export const renderPassengerCountSelector = ({input, meta: {touched, error}}) => (
<div  style={show} className="mui--text-left">
        <Select defaultValue="2" {...input} label="No. Passengers">
            <Option value="1" label="1 passenger"/>
            <Option value="2" label="2 passengers"/>
            <Option value="3" label="3 passengers"/>
            <Option value="4" label="4 passengers"/>
            <Option value="5" label="5 passengers"/>
            <Option value="6" label="6 passengers"/>
            <Option value="7" label="7 passengers"/>
        </Select>
    </div>
)


export default renderPassengerCountSelector
