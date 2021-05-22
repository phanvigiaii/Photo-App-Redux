import Banner from "components/Banner";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import "./MainPage.scss";

MainPage.propTypes = {};

function MainPage(props) {
    return (
        <div className="main-page">
            <Banner
                title="Your Great Awesome Album Photo"
                backgroundURL=""
            ></Banner>
            <Button className="main-page__btn btn">
                <NavLink to="/photos/add">Add Page</NavLink>
            </Button>
        </div>
    );
}

export default MainPage;
