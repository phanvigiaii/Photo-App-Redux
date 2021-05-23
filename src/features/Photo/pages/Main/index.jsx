import Banner from 'components/Banner';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import './MainPage.scss';

MainPage.propTypes = {};

function MainPage(props) {
    const photos = useSelector((state) => state.photos);

    return (
        <div className="main-page">
            <Banner
                title="Your Great Awesome Album Photo"
                backgroundURL=""
            ></Banner>
            <Button className="main-page__btn btn">
                <NavLink to="/photos/add">Add photo</NavLink>
            </Button>
            <PhotoList photos={photos} />
        </div>
    );
}

export default MainPage;
