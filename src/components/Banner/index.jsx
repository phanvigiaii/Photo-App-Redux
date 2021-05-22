import PropTypes from "prop-types";
import React from "react";
import "./Banner.scss";
Banner.propTypes = { title: PropTypes.string, backgroundURL: PropTypes.string };
Banner.defaultValue = {
    title: "",
    backgroundImageURL: "",
};

function Banner(props) {
    const { title, backgroundImageURL } = props;
    const bannerStyle = backgroundImageURL
        ? { backgroundImage: `url(${backgroundImageURL}` }
        : {};
    return (
        <div className="banner" style={bannerStyle}>
            {title}
        </div>
    );
}

export default Banner;
