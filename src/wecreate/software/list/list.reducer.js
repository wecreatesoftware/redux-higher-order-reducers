export const INSERT_ITEM = "INSERT_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const REMOVE_ITEM_BY_KEY = "REMOVE_ITEM_BY_KEY"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const UPDATE_ITEM_BY_KEY = "UPDATE_ITEM_BY_KEY"
export const RESET_LIST = "RESET_LIST"
export const SET_LIST = "SET_LIST"

const insertItem = ({ state, payload: { index, item } }) => [...state.slice(0, index), item, ...state.slice(index)]

const removeItem = ({ state, payload: { index } }) => [...state.slice(0, index), ...state.slice(index + 1)]

const removeItemByKey = ({ state, payload: { item }, key }) => {
    const index = state.findIndex(curItem => curItem[key] === item[key])

    return (index > -1) ? removeItem({ state, payload: { index } }) : state
}

const updateItem = ({ state, payload: { index, item } }) => state.map((curItem, curIndex) => {
    if (curIndex !== index) return curItem

    return { ...curItem, ...item }
})

const updateItemByKey = ({ state, payload: { item }, key }) => state.map((curItem) => {
    if (curItem[key] !== item[key]) return curItem

    return { ...curItem, ...item }
})

export const listReducer = ({ reducerName = undefined, initialState = [], key = undefined } = {}) => (state = initialState, { type = undefined, payload = {}, meta = {}, error = undefined } = {}) => {
    if (meta.reducerName !== reducerName) return state
    if (error === true) return state

    switch (type) {
        case INSERT_ITEM:
            return insertItem({ state, payload })
        case REMOVE_ITEM:
            return removeItem({ state, payload })
        case REMOVE_ITEM_BY_KEY:
            return removeItemByKey({ state, payload, key })
        case UPDATE_ITEM:
            return updateItem({ state, payload })
        case UPDATE_ITEM_BY_KEY:
            return updateItemByKey({ state, payload, key })
        case RESET_LIST:
            return [...initialState]
        case SET_LIST:
            return [...payload]
        default:
            return state
    }
}
