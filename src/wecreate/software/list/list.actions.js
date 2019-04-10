import {
    ADD_ITEM,
    ADD_ITEMS,
    INSERT_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_BY_KEY,
    RESET_LIST,
    SET_LIST,
    UPDATE_ITEM,
    UPDATE_ITEM_BY_KEY,
    UPDATE_ITEMS_BY_KEY,
    UPDATE_VALUE_ALL_ITEMS,
} from "./list.types"

export const insertItemAction = ({ item, index, reducerName }) => ({
    type: INSERT_ITEM,
    payload: { item, index },
    meta: { reducerName },
})

export const removeItemAction = ({ index, reducerName }) => ({
    type: REMOVE_ITEM,
    payload: { index },
    meta: { reducerName },
})

export const removeItemByKeyAction = ({ item, reducerName }) => ({
    type: REMOVE_ITEM_BY_KEY,
    payload: { item },
    meta: { reducerName },
})

export const updateItemAction = ({ item, index, reducerName }) => ({
    type: UPDATE_ITEM,
    payload: { item, index },
    meta: { reducerName },
})

export const updateItemsByKeyAction = ({ items, reducerName }) => ({
    type: UPDATE_ITEMS_BY_KEY,
    payload: { items },
    meta: { reducerName },
})

export const updateItemByKeyAction = ({ item, reducerName }) => ({
    type: UPDATE_ITEM_BY_KEY,
    payload: { item },
    meta: { reducerName },
})

export const updateValueAllItemsAction = ({ keyValuePairs, reducerName }) => ({
    type: UPDATE_VALUE_ALL_ITEMS,
    payload: keyValuePairs,
    meta: { reducerName },
})

export const resetListAction = ({ reducerName }) => ({
    type: RESET_LIST,
    meta: { reducerName },
})

export const setListAction = ({ reducerName, payload }) => ({
    type: SET_LIST,
    payload,
    meta: { reducerName },
})

export const addItemAction = ({ item, reducerName }) => ({
    type: ADD_ITEM,
    payload: item,
    meta: { reducerName },
})

export const addItemsAction = ({ items, reducerName }) => ({
    type: ADD_ITEMS,
    payload: items,
    meta: { reducerName },
})
