import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'reactstrap';
import './PhotoCard.scss';

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
};
PhotoCard.defaultValue = {
    photo: {},
    onRemove: null,
    onEdit: null,
};

function PhotoCard(props) {
    const { onRemove, onEdit } = props;
    const { photo } = props;

    function handleRemove() {
        if (onRemove) {
            onRemove(photo);
        }
    }

    function handleEdit() {
        if (onEdit) {
            onEdit(photo);
        }
    }

    return (
        <Col xs="6" md="4" xl="3">
            <div className="photo-card">
                <img src={photo.photo} alt="" className="photo-card__img" />
                <div className="photo-card__wrap">
                    <h3 className="photo-card__title">{photo.title}</h3>
                    <div className="photo-card__wrap-btn">
                        <button
                            className="edit btn btn-outline-danger"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            className="remove btn btn-outline-white"
                            onClick={handleRemove}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default PhotoCard;
