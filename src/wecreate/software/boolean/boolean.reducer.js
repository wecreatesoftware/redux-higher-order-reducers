import {
    RESET_BOOLEAN,
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

export const booleanReducer = ({ reducerName = undefined, initialState = false, extendedReducer = undefined } = {}) => (state = initialState, action = {}) => {
    const { type = undefined, payload, meta = {} } = action

    if (meta.reducerName !== reducerName) return state

    switch (type) {
        case RESET_BOOLEAN:
            return initialState
        case SET_BOOLEAN:
            return payload
        case TOGGLE_BOOLEAN:
            return !state
        default:
            if (extendedReducer) {
                return extendedReducer(state, action)
            }
            return state
    }
}
