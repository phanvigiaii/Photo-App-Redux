import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
    return (
        <div className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            href="https://github.com/phanvigiaii/Photo-App-Redux"
                            className="header__title header__link d-inline-block"
                        >
                            MeoCoder
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            to="/photos"
                            activeClassName="header__link-active"
                            className="header__link d-inline-block hover"
                        >
                            Go To Home Page
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
