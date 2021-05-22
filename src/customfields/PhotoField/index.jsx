import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

PhotoField.propTypes = {
    label: PropTypes.string,
};

PhotoField.defaultValue = {
    label: '',
};

function PhotoField(props) {
    const { field, form, label } = props;
    const { errors, touched } = form;
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
                className={errors[name] && touched[name] ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default PhotoField;
