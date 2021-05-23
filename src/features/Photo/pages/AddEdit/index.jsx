import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, editPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Col, Container, Row } from 'reactstrap';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const history = useHistory();
    const paramsUrl = useParams();
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos);

    const itemEditPhoto = photos.find((x) => x.id === +paramsUrl.photoId);
    const isAddMode = !itemEditPhoto;

    function handleSubmit(values, actions) {
        return new Promise((res) => {
            setTimeout(() => {
                actions.resetForm({
                    title: '',
                    category: null,
                    photo: '',
                });
                if (!itemEditPhoto) {
                    const photoID = Math.trunc(Math.random() * 1000000);
                    dispatch(addPhoto({ id: photoID, ...values }));
                } else {
                    const editedPhoto = {
                        id: itemEditPhoto.id,
                        ...values,
                    };
                    dispatch(editPhoto(editedPhoto));
                }
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
                        <PhotoForm
                            onSubmit={handleSubmit}
                            itemEditPhoto={itemEditPhoto ? itemEditPhoto : null}
                            isAddMode={isAddMode}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddEditPage;
