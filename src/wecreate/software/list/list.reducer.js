export const INSERT_ITEM = "INSERT_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const RESET_LIST = "RESET_LIST"

export const listReducer = ({ reducerName = undefined, initialState = [] } = {}) => (state = initialState, { type = undefined, payload = {}, meta = {}, error = undefined } = {}) => {
    if (meta.reducerName !== reducerName) return state
    if (error === true) return state

    switch (type) {
        case INSERT_ITEM:
            return insertItem({ state, payload })
        case REMOVE_ITEM:
            return removeItem({ state, payload })
        case UPDATE_ITEM:
            return updateItem({ state, payload })
        case RESET_LIST:
            return [...initialState]
        default:
            return state
    }
}

const insertItem = ({ state, payload: { index, item } }) => [...state.slice(0, index), item, ...state.slice(index)]
const removeItem = ({ state, payload: { index } }) => [...state.slice(0, index), ...state.slice(index + 1)]
const updateItem = ({ state, payload: { index, item } }) => state.map((curItem, curIndex) => curIndex !== index ? curItem : { ...curItem, ...item })