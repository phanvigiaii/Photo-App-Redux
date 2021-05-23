import { createSlice } from '@reduxjs/toolkit';

const photos = [
    {
        id: 8091,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 1,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755774453',
    },
    {
        id: 8092,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 1,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755795061',
    },
    {
        id: 8093,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 1,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755813369',
    },
];

const photo = createSlice({
    name: 'photo',
    initialState: photos,
    reducers: {
        addPhoto: (state, action) => void state.push(action.payload),
        removePhoto: (state, action) =>
            state.filter((x) => x.id !== action.payload),
        editPhoto: (state, action) => {
            const newPhotoIndex = state.findIndex(
                (x) => x.id === action.payload.id
            );
            if (newPhotoIndex >= 0) state[newPhotoIndex] = action.payload;
        },
    },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;
