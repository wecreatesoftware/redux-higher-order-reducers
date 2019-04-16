import {
    resetStringAction,
    setStringAction,
} from "../../../src/wecreate/software/redux.higher.order.reducers"
import {
    STRING_REDUCER1,
    STRING_REDUCER2,
    STRING_REDUCER_EXTENDED,
    SET_STRING_UPPERCASE,
    SET_STRING_LOWERCASE,
} from "./string.reducer.types"

export const setString1Action = string => setStringAction({
    reducerName: STRING_REDUCER1,
    string,
})

export const setString2Action = string => setStringAction({
    reducerName: STRING_REDUCER2,
    string,
})

export const resetString1Action = () => resetStringAction({ reducerName: STRING_REDUCER1 })

export const resetString2Action = () => resetStringAction({ reducerName: STRING_REDUCER2 })

export const setStringLowerCaseAction = string => ({
    type: SET_STRING_LOWERCASE,
    payload: string,
    meta: { reducerName: STRING_REDUCER_EXTENDED },
})

export const setStringUpperCaseAction = string => ({
    type: SET_STRING_UPPERCASE,
    payload: string,
    meta: { reducerName: STRING_REDUCER_EXTENDED },
})
