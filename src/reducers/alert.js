import { alertConstants } from "../constants/alert";

export const alert = (state={}, action) => {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: action.type,
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: action.type,
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
};