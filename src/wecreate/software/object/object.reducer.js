export const UPDATE_OBJECT = "@@wecreatesoftware/redux-higher-order-reducers/update-object"
export const RESET_OBJECT = "@@wecreatesoftware/redux-higher-order-reducers/reset-object"
export const SET_OBJECT = "@@wecreatesoftware/redux-higher-order-reducers/set-object"

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
