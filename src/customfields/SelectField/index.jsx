import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

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
    const { field, placeholder, options, disabled, label } = props;
    const { name, value } = field;
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
            />
        </FormGroup>
    );
}

export default SelectField;
