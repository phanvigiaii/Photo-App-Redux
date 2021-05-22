import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

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
    const { field, form, label, placeholder, type, disabled } = props;
    const { name } = field;
    const { errors, touched } = form;
    return (
        <FormGroup className="photo-form__group">
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                invalid={errors[name] && touched[name]}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputField;
