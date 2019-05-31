import {
    RESET_OBJECT,
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

/**
 * @desc action creator to update object
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to update object
 * @param {Object} param.payload - key/value pair(s) to update with
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type Object
 * @returns {{payload: Object, meta: {reducerName: String}, type: string}}
 */
export const updateObjectAction = ({ reducerName, payload, meta }) => {
    if (
        typeof payload !== "object"
        || payload.length >= 0
        || payload instanceof Date
        || payload instanceof Set
    ) {
        throw Error("Action payload must be of type Object")
    }

    return {
        type: UPDATE_OBJECT,
        payload,
        meta: {
            reducerName,
            ...meta,
        },
    }
}

/**
 * @desc action creator to reset object to original state
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to reset object
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const resetObjectAction = ({ reducerName, meta }) => ({
    type: RESET_OBJECT,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to set object
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to set object
 * @param {Object} param.payload - value to set reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type String
 * @returns {{payload: String, meta: {reducerName: String}, type: String}}
 */
export const setObjectAction = ({ reducerName, payload, meta }) => {
    if (
        typeof payload !== "object"
        || payload.length >= 0
        || payload instanceof Date
        || payload instanceof Set
    ) {
        throw Error("Action payload must be of type Object")
    }

    return {
        type: SET_OBJECT,
        payload,
        meta: {
            reducerName,
            ...meta,
        },
    }
}
