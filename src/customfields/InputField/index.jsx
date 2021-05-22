import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

InputField.defaultValue = {
    label: '',
    placeholder: '',
    type: 'text',
    disabled: false,
};

function InputField(props) {
    const { field, label, placeholder, type, disabled } = props;
    const { name } = field;
    return (
        <FormGroup className="photo-form__group">
            {label && <Label for={name}>{label}</Label>}
            <Input id={name} {...field} type={type} placeholder={placeholder} disabled={disabled} />
        </FormGroup>
    );
}

export default InputField;
