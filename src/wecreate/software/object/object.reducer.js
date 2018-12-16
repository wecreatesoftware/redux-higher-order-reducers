export const UPDATE_ITEM = "UPDATE_ITEM"
export const RESET_OBJECT = "RESET_OBJECT"

export const objectReducer = ({ reducerName = undefined, initialState = {} } = {}) => (state = initialState, { type = undefined, payload = {}, meta = {}, error = undefined } = {}) => {
    if (meta.reducerName !== reducerName) return state

    switch (type) {
        case UPDATE_ITEM:
            return { ...state, ...payload, error }
        case RESET_OBJECT:
            return { ...initialState }
        default:
            return state
    }
}
