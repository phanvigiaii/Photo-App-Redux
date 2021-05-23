import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'reactstrap';
import './PhotoCard.scss';

PhotoCard.propTypes = { photo: PropTypes.object };
PhotoCard.defaultValue = {
    photo: {},
};

function PhotoCard(props) {
    const { photo } = props;

    return (
        <Col xs="3">
            <div className="photo-card">
                <img src={photo.photo} alt="" className="photo-card__img" />
                <div className="photo-card__wrap">
                    <h3 className="photo-card__title">{photo.title}</h3>
                    <div class="photo-card__wrap-btn">
                        <button className="edit btn btn-outline-danger">
                            Edit
                        </button>
                        <button className="remove btn btn-outline-white">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default PhotoCard;
