import { ADD_IMAGE, DELETE_IMAGE } from "../actions/actionTypes";

const initialState = {
    images: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_IMAGE:
            return {
                ...state,
                images: state.images.concat({
                    key: Math.random().toString(),
                    image: action.image,
                    description: action.description
                })
            }
        case DELETE_IMAGE:
            return {
                ...state,
                images: state.images.filter(image => image.key !== action.imageKey)
            }
        default: return state;
    }
};

export default reducer;