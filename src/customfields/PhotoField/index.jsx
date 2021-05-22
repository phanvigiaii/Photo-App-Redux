import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

PhotoField.propTypes = {
    label: PropTypes.string,
};

PhotoField.defaultValue = {
    label: '',
};

function PhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;

    const handleImageChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    };

    return (
        <FormGroup className="photo-form__group">
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onButtonClick={handleImageChange}
                onButtonBlur={onBlur}
            />
        </FormGroup>
    );
}

export default PhotoField;
