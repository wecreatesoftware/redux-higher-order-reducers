import {
    SET_STRING_LOWERCASE,
    SET_STRING_UPPERCASE,
} from "./string.reducer.types"

export const updateStringCaseReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_STRING_LOWERCASE:
            return payload.toLowerCase()
        case SET_STRING_UPPERCASE:
            return payload.toUpperCase()
        default:
            return state
    }
}
