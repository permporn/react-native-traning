import {ADD_IMAGE, DELETE_IMAGE} from './actionTypes';

export const addImage = imgData => {
    return {
        type: ADD_IMAGE,
        image: imgData.image,
        description: imgData.description
    }
}

export const deleteImage = key => {
    return {
        type: DELETE_IMAGE,
        imageKey: key
    }
}
