import {
    INSERT_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_BY_KEY,
    RESET_LIST,
    SET_LIST,
    UPDATE_ITEM,
    UPDATE_ITEM_BY_KEY,
    UPDATE_ITEMS_BY_KEY
} from "./list.types"
import {
    insertItem,
    removeItem,
    removeItemByKey,
    updateItem,
    updateItemByKey,
    updateItemsByKey
} from "./list.util"

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
        case UPDATE_ITEMS_BY_KEY:
            return updateItemsByKey({ state, payload, key })
        case RESET_LIST:
            return [ ...initialState ]
        case SET_LIST:
            return [ ...payload ]
        default:
            return state
    }
}
