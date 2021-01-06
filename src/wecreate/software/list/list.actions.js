import {
    ADD_ITEM,
    ADD_ITEMS,
    INSERT_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_BY_KEY,
    REMOVE_ITEMS_BY_KEY,
    RESET_LIST,
    SET_LIST,
    UPDATE_ITEM,
    UPDATE_ITEM_BY_KEY,
    UPDATE_ITEMS_BY_KEY,
    UPDATE_VALUE_ALL_ITEMS,
} from "./list.types"

/**
 * @desc action creator to insert item
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to insert item
 * @param {Object} param.item - item to insert
 * @param {Number} param.index - index to insert item at
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const insertItemAction = ({ item, index, reducerName, meta }) => ({
    type: INSERT_ITEM,
    payload: { item, index },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to remove item
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to remove item
 * @param {Number} param.index - index to remove item at
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const removeItemAction = ({ index, reducerName, meta }) => ({
    type: REMOVE_ITEM,
    payload: { index },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to remove item by key
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to remove item by key
 * @param {Object} param.item - item to remove by key
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const removeItemByKeyAction = ({ item, reducerName, meta }) => ({
    type: REMOVE_ITEM_BY_KEY,
    payload: { item },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to remove items
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to remove item
 * @param {Array} param.items - items to remove (must have key)
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Array, meta: {reducerName: String}, type: string}}
 */
export const removeItemsByKeyAction = ({ items, reducerName, meta }) => ({
    type: REMOVE_ITEMS_BY_KEY,
    payload: { items },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to update item
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to update item
 * @param {Object} param.item - item to update
 * @param {Number} param.index - index to update item at
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const updateItemAction = ({ item, index, reducerName, meta }) => ({
    type: UPDATE_ITEM,
    payload: { item, index },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to update items by key
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to update items by key
 * @param {Array} param.items - items to update
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const updateItemsByKeyAction = ({ items, reducerName, meta }) => ({
    type: UPDATE_ITEMS_BY_KEY,
    payload: { items },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to update item by key
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to update item by key
 * @param {Object} param.item - item to update
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const updateItemByKeyAction = ({ item, reducerName, meta }) => ({
    type: UPDATE_ITEM_BY_KEY,
    payload: { item },
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to update a value in all items in the reducer
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to update a value in all items
 * @param {Array} param.keyValuePairs - key/value pair to update on all items
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const updateValueAllItemsAction = ({ keyValuePairs, reducerName, meta }) => ({
    type: UPDATE_VALUE_ALL_ITEMS,
    payload: keyValuePairs,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to reset list
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to reset list
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const resetListAction = ({ reducerName, meta }) => ({
    type: RESET_LIST,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to set list
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to set list
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const setListAction = ({ reducerName, payload, meta }) => ({
    type: SET_LIST,
    payload,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to add item to end of list
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to add item to
 * @param {Object} param.item - item to add to end of list
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const addItemAction = ({ item, reducerName, meta }) => ({
    type: ADD_ITEM,
    payload: item,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to add items to end of list
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to add items to
 * @param {Array} param.items - items to add to end of list
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const addItemsAction = ({ items, reducerName, meta }) => ({
    type: ADD_ITEMS,
    payload: items,
    meta: {
        reducerName,
        ...meta,
    },
})
