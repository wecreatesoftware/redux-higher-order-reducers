import { RESET_OBJECT, UPDATE_OBJECT } from "./object.reducer"

export const updateObjectAction = ({ reducerName, updates }) => ({
    type: UPDATE_OBJECT,
    payload: { ...updates },
    meta: { reducerName }
})

export const resetObjectAction = ({ reducerName }) => ({
    type: RESET_OBJECT,
    meta: { reducerName }
})


export const setObjectAction = ({ reducerName, object: payload }) => ({
    type: RESET_OBJECT,
    payload,
    meta: { reducerName }
})
