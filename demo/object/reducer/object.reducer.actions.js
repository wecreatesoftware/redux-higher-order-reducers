import {
    resetObjectAction,
    setObjectAction,
    updateObjectAction,
} from "../../../src/wecreate/software/redux.higher.order.reducers"
import {
    OBJECT_REDUCER1,
    OBJECT_REDUCER2,
    OBJECT_REDUCER_EXTENDED,
    UPDATE_OBJECT_TIMESTAMP,
} from "./object.reducer.types"

export const updateObject1Action = payload => updateObjectAction({
    reducerName: OBJECT_REDUCER1,
    payload,
})

export const updateObject2Action = payload => updateObjectAction({
    reducerName: OBJECT_REDUCER2,
    payload,
})

export const resetObject1Action = () => resetObjectAction({ reducerName: OBJECT_REDUCER1 })

export const resetObject2Action = () => resetObjectAction({ reducerName: OBJECT_REDUCER2 })

export const setObject1Action = payload => setObjectAction({
    reducerName: OBJECT_REDUCER1,
    payload,
})

export const setObject2Action = payload => setObjectAction({
    reducerName: OBJECT_REDUCER2,
    payload,
})

export const updateObjectTimestampAction = payload => ({
    type: UPDATE_OBJECT_TIMESTAMP,
    payload,
    meta: { reducerName: OBJECT_REDUCER_EXTENDED },
})
