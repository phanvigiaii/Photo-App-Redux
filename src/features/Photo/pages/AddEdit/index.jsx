import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Col, Container, Row } from 'reactstrap';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(values, actions) {
        return new Promise((res) => {
            setTimeout(() => {
                actions.resetForm({
                    title: '',
                    category: null,
                    photo: '',
                });
                dispatch(addPhoto(values));
                history.push('/photos');

                res(true);
            }, 2000);
        });
    }
    return (
        <div className="edit-page">
            <Banner
                title="Pick your awesome photo"
                backgroundImageURL={Images.GREEN_BG}
            />
            <Container>
                <Row className="justify-content-center">
                    <Col xs="5">
                        <PhotoForm onSubmit={handleSubmit} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddEditPage;
