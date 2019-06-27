import {
    DECREMENT_NUMBER,
    INCREMENT_NUMBER,
    RESET_NUMBER,
    SET_NUMBER,
} from "./number.types"

export const numberReducer = ({ reducerName = undefined, initialState = 0, extendedReducer = undefined, allowNegative = false } = {}) => (state = initialState, action = {}) => {
    const { type = undefined, payload = undefined, meta = {} } = action
    if (meta.reducerName !== reducerName) return state

    switch (type) {
        case INCREMENT_NUMBER:
            return state + 1
        case DECREMENT_NUMBER:
            if (allowNegative) return state - 1
            return Math.max((state - 1), 0)
        case RESET_NUMBER:
            return initialState
        case SET_NUMBER:
            return payload
        default:
            if (extendedReducer) {
                return extendedReducer(state, action)
            }
            return state
    }
}
