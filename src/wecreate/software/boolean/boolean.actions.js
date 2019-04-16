import {
    RESET_BOOLEAN,
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

/**
 * @desc action creator to toggle boolean
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to toggle boolean
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const toggleBooleanAction = ({ reducerName, meta }) => ({
    type: TOGGLE_BOOLEAN,
    meta: {
        reducerName,
        ...meta,
    },
})
/**
 * @desc action creator to reset boolean to original state
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to reset boolean
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const resetBooleanAction = ({ reducerName, meta }) => ({
    type: RESET_BOOLEAN,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to set boolean
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to set boolean
 * @param {Boolean} param.boolean - value to set reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type Boolean
 * @returns {{payload: Boolean, meta: {reducerName: String}, type: String}}
 */
export const setBooleanAction = ({ reducerName, boolean, meta }) => {
    if (typeof boolean !== "boolean" || boolean instanceof Boolean) {
        throw Error("Action payload must be of type Boolean")
    }

    return {
        type: SET_BOOLEAN,
        payload: boolean,
        meta: {
            reducerName,
            ...meta,
        },
    }
}
