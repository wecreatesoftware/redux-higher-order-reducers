import {
    RESET_STRING,
    SET_STRING,
} from "./string.types"

export const stringReducer = ({ reducerName = undefined, initialState = "", extendedReducer = undefined } = {}) => (state = initialState, action = {}) => {
    const { type = undefined, payload = {}, meta = {} } = action

    if (meta.reducerName !== reducerName) return state

    switch (type) {
        case RESET_STRING:
            return initialState
        case SET_STRING:
            return payload
        default:
            if (extendedReducer) {
                return extendedReducer(state, action)
            }
            return state
    }
}
