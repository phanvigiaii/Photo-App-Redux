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
        category: 3,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755795061',
    },
    {
        id: 8093,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 4,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755813369',
    },
    {
        id: 8094,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 2,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755813370',
    },
    {
        id: 8095,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 3,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755313369',
    },
    {
        id: 8096,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 4,
        photo: 'https://picsum.photos/600/400/?random&rnd1611755813369',
    },
    {
        id: 8097,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 5,
        photo: 'https://picsum.photos/600/400/?random&rnd1621754813369',
    },
    {
        id: 8098,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 1,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755613369',
    },
    {
        id: 8099,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 2,
        photo: 'https://picsum.photos/600/400/?random&rnd1621455813369',
    },
    {
        id: 8100,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 3,
        photo: 'https://picsum.photos/600/400/?random&rnd1621745813369',
    },
    {
        id: 8101,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 3,
        photo: 'https://picsum.photos/600/400/?random&rnd1621755213369',
    },
    {
        id: 8102,
        title: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. atibus aspernatur enim.',
        category: 4,
        photo: 'https://picsum.photos/600/400/?random&rnd1621750813369',
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
