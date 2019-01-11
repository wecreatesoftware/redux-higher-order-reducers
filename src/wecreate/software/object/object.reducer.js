import {
    RESET_OBJECT,
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

export const objectReducer = ({ reducerName = undefined, initialState = {} } = {}) => (state = initialState, { type = undefined, payload = {}, meta = {}, error = undefined } = {}) => {
    if (meta.reducerName !== reducerName) return state

    switch (type) {
        case UPDATE_OBJECT:
            if (error) {
                // https://github.com/redux-utilities/flux-standard-action/issues/56
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
                return {
                    ...state,
                    error: payload.message,
                }
            }
            return {
                ...state,
                ...payload,
                error: undefined,
            }
        case RESET_OBJECT:
            return { ...initialState }
        case SET_OBJECT:
            return { ...payload }
        default:
            return state
    }
}
