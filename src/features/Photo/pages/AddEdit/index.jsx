import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import { Col, Container, Row } from "reactstrap";

AddEditPage.propTypes = {};

function AddEditPage(props) {
    return (
        <div className="edit-page">
            <Banner
                title="Pick your awesome photo"
                backgroundImageURL={Images.GREEN_BG}
            />
            <Container>
                <Row className="justify-content-center">
                    <Col xs="5">
                        <PhotoForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddEditPage;
