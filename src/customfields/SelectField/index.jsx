import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import './SelectField.scss';

SelectField.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};

SelectField.defaultValue = {
    placeholder: '',
    options: [],
    disabled: false,
    label: '',
};

function SelectField(props) {
    const { field, form, placeholder, options, disabled, label } = props;
    const { name, value } = field;
    const { errors, touched } = form;

    const selectedValue = options.find((x) => x.value === value);
    const selectedOption = selectedValue ? selectedValue : null;

    function handleSelectValueChange(selectOption) {
        const value = selectOption ? selectOption.value : selectOption;
        const changeEvent = {
            target: {
                name,
                value,
            },
        };

        field.onChange(changeEvent);
    }

    return (
        <FormGroup className="photo-form__group">
            <Label for={name}>{label}</Label>
            <Select
                {...field}
                value={selectedOption}
                disabled={disabled}
                options={options}
                placeholder={placeholder}
                onChange={handleSelectValueChange}
                className={errors[name] && touched[name] ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;
