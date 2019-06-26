import {
    INCREMENT_NUMBER,
    DECREMENT_NUMBER,
    RESET_NUMBER,
    SET_NUMBER,
} from "./number.types"

/**
 * @desc action creator to increment number
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to increment number
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const incrementNumberAction = ({ reducerName, meta }) => ({
    type: INCREMENT_NUMBER,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to decrement number
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to decrement number
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const decrementNumberAction = ({ reducerName, meta }) => ({
    type: DECREMENT_NUMBER,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to reset number
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to reset number
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const resetNumberAction = ({ reducerName, meta }) => ({
    type: RESET_NUMBER,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to set number
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to set number
 * @param {Number} param.number - value to set number reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type Number
 * @returns {{payload: Number, meta: {reducerName: String}, type: String}}
 */
export const setNumberAction = ({ reducerName, number, meta }) => {
    if (typeof number !== "number" || number instanceof Number) {
        throw Error("Action payload must be of type Number")
    }

    return {
        type: SET_NUMBER,
        payload: number,
        meta: {
            reducerName,
            ...meta,
        },
    }
}
