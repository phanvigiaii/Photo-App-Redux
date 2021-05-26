import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header(props) {
    const isSignedIn = useSelector((state) => state.user);
    console.log(isSignedIn);
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
                        {isSignedIn ? (
                            <NavLink
                                exact
                                to="/photos"
                                activeClassName="header__link-active"
                                className="header__link d-inline-block hover"
                            >
                                Go To Home Page
                            </NavLink>
                        ) : (
                            <NavLink
                                exact
                                to="/sign-in"
                                activeClassName="header__link-active"
                                className="header__link d-inline-block hover"
                            >
                                Sign In
                            </NavLink>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
