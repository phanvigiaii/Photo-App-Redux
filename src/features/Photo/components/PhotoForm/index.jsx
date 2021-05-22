import Images from 'constants/images';
import PHOTO_SELECT_OPTIONS from 'constants/values';
import InputField from 'customfields/InputField';
import SelectField from 'customfields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Label } from 'reactstrap';
import './PhotoForm.scss';
PhotoForm.propTypes = {};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        category: null,
    };
    return (
        <div className="photo-form">
            <Formik initialValues={initialValues}>
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;
                    console.log({ values, errors, touched });
                    return (
                        <Form>
                            <FastField
                                name="title"
                                component={InputField}
                                label="Title"
                                placeholder="Eg: Wow animal..."
                            />

                            <FastField
                                name="category"
                                component={SelectField}
                                options={PHOTO_SELECT_OPTIONS}
                                label="Category"
                                placeholder="Select your category photo"
                            />

                            <FormGroup className="photo-form__group">
                                <Label>Photo</Label>
                                <div>
                                    <Button outline color="primary">
                                        Random a photo
                                    </Button>
                                    <div
                                        className="photo-form__img"
                                        style={{
                                            backgroundImage: `url(${Images.ORANGE_BG})`,
                                        }}
                                    ></div>
                                </div>
                            </FormGroup>
                            <FormGroup className="photo-form__group">
                                <Button color="primary" type="submit">
                                    Send a photo
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default PhotoForm;
