import {
    RESET_STRING,
    SET_STRING,
} from "./string.types"
import { validateString } from "./string.validation"

export const resetStringAction = ({ reducerName, meta }) => ({
    type: RESET_STRING,
    meta: {
        reducerName,
        ...meta,
    },
})

export const setStringAction = ({ reducerName, string, meta }) => {
    validateString(string)

    return {
        type: SET_STRING,
        payload: string,
        meta: {
            reducerName,
            ...meta,
        },
    }
}
