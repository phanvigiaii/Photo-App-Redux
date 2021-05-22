import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    ImageUrl: PropTypes.string,
    onButtonClick: PropTypes.func,
    onButtonBlur: PropTypes.func,
};

RandomPhoto.defaultValue = {
    name: '',
    ImageUrl: '',
    onButtonClick: null,
    onButtonBlur: null,
};

const getRandomNewImage = () => {
    return Promise.resolve(
        `https://picsum.photos/600/400/?random&rnd${new Date().getTime()}`
    );
};

function RandomPhoto(props) {
    const { name, imageUrl, onButtonClick, onButtonBlur } = props;

    async function handleRandomImage() {
        const newImageUrl = await getRandomNewImage();
        onButtonClick(newImageUrl);
    }

    return (
        <div>
            <Button
                name={name}
                outline
                color="primary"
                onClick={handleRandomImage}
                onBlur={onButtonBlur}
            >
                Random a photo
            </Button>
            <div className="photo-form__img">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Oops... Your photo was not be found"
                    />
                )}
            </div>
        </div>
    );
}

export default RandomPhoto;
