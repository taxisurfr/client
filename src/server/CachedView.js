import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from '../BookingWizard/validate'
import Panel from 'muicss/lib/react/panel';
import {renderReadonly} from '../util/render/renderReadonlyField'
import NavLink from '../util/NavLink'
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom'
import Form from 'muicss/lib/react/form';
class CachedView extends React.Component {

    render() {
        var {description, price,url} = this.props;
        var style = {
            color: 'blue',
            fontSize: 24
        };
        console.log('XXXXXXXXXX:'+url);
        return (
            <Panel>
                <div className="mui--text-left">
                    <Field name="route" hint={description} component={renderReadonly}
                        label="Route"/>
                    <Field name="price" hint={price} component={renderReadonly}
                    label="Price"/>
                    <Form action={url}>
                        <Button color="accent">Book this taxi</Button>
                    </Form>
                </div>
            </Panel>
        );
    }

}

export default reduxForm({
    form: 'wizard',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(CachedView)
