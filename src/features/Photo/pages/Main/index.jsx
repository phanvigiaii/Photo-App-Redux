import Banner from 'components/Banner';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import './MainPage.scss';

MainPage.propTypes = {};

function MainPage(props) {
    const photos = useSelector((state) => state.photos);
    const history = useHistory();
    const dispatch = useDispatch();

    function handleRemovePhoto(photo) {
        dispatch(removePhoto(photo.id));
    }

    function handleEditPhoto(photo) {
        const editUrl = `/photos/${photo.id}`;
        history.push(editUrl);
    }

    return (
        <div className="main-page">
            <Banner
                title="Your Great Awesome Album Photo"
                backgroundURL=""
            ></Banner>
            <Button className="main-page__btn btn">
                <NavLink to="/photos/add">Add photo</NavLink>
            </Button>
            <PhotoList
                photos={photos}
                onRemove={handleRemovePhoto}
                onEdit={handleEditPhoto}
            />
        </div>
    );
}

export default MainPage;
