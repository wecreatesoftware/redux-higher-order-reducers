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

export const insertItemAction = ({ item, index, reducerName }) => ({
    type: INSERT_ITEM,
    payload: { item, index },
    meta: { reducerName }
})

export const removeItemAction = ({ index, reducerName }) => ({
    type: REMOVE_ITEM,
    payload: { index },
    meta: { reducerName }
})

export const removeItemByKeyAction = ({ item, reducerName }) => ({
    type: REMOVE_ITEM_BY_KEY,
    payload: { item },
    meta: { reducerName }
})

export const updateItemAction = ({ item, index, reducerName }) => ({
    type: UPDATE_ITEM,
    payload: { item, index },
    meta: { reducerName }
})

export const updateItemsByKeyAction = ({ items, reducerName }) => ({
    type: UPDATE_ITEMS_BY_KEY,
    payload: { items },
    meta: { reducerName }
})

export const updateItemByKeyAction = ({ item, reducerName }) => ({
    type: UPDATE_ITEM_BY_KEY,
    payload: { item },
    meta: { reducerName }
})

export const resetListAction = ({ reducerName }) => ({
    type: RESET_LIST,
    meta: { reducerName }
})

export const setListAction = ({ reducerName, list: payload }) => ({
    type: SET_LIST,
    payload,
    meta: { reducerName }
})
