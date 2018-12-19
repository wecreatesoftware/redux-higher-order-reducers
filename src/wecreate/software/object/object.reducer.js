export const UPDATE_OBJECT = "UPDATE_OBJECT"
export const RESET_OBJECT = "RESET_OBJECT"
export const SET_OBJECT = "SET_OBJECT"

export const objectReducer = ({ reducerName = undefined, initialState = {} } = {}) => (state = initialState, { type = undefined, payload = {}, meta = {}, error = undefined } = {}) => {
    if (meta.reducerName !== reducerName) return state

    switch (type) {
        case UPDATE_OBJECT:
            return { ...state, ...payload, error }
        case RESET_OBJECT:
            return { ...initialState }
        case SET_OBJECT:
            return { ...payload }
        default:
            return state
    }
}
