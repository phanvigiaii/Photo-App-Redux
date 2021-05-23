import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';
import './PhotoList.scss';

PhotoList.propTypes = {
    photos: PropTypes.array,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
};
PhotoList.defaultValue = {
    photos: [],
    onRemove: null,
    onEdit: null,
};

function PhotoList(props) {
    const { onRemove, onEdit } = props;
    const { photos } = props;

    return (
        <div className="photo-list">
            <Container>
                <Row className="flex-wrap">
                    {photos.map((photo, index) => (
                        <PhotoCard
                            key={index}
                            photo={photo}
                            onRemove={onRemove}
                            onEdit={onEdit}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default PhotoList;
