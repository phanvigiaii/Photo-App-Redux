import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';
import './PhotoList.scss';

PhotoList.propTypes = { photos: PropTypes.array };
PhotoList.defaultValue = {
    photos: [],
};

function PhotoList(props) {
    const { photos } = props;
    return (
        <div className="photo-list">
            <Container>
                <Row className="flex-wrap">
                    {photos.map((photo, index) => (
                        <PhotoCard key={index} photo={photo} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default PhotoList;
