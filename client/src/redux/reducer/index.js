import { GET_ALL_PROJECTS, GET_ALL_TASKS } from "../action/index";

const initialState = {
    projects: [],
    tasks: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };

        default:
            return state;
    }
};
export default rootReducer;
