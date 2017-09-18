import React from "react";
import Textarea from "muicss/lib/react/textarea";

var show = {border:'none'};

export const renderTextArea = ({input, placeholder, label, meta: {touched, error}}) => (
    <div style={show} className="mui--text-left">
        <Textarea label={label} {...input} defaultValue=""/>
    </div>
)

export default renderTextArea
