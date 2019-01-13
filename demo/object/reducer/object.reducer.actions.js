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

export const updateObject1Action = updates => updateObjectAction({
    reducerName: OBJECT_REDUCER1,
    updates,
})

export const updateObject2Action = updates => updateObjectAction({
    reducerName: OBJECT_REDUCER2,
    updates,
})

export const resetObject1Action = () => resetObjectAction({ reducerName: OBJECT_REDUCER1 })

export const resetObject2Action = () => resetObjectAction({ reducerName: OBJECT_REDUCER2 })

export const setObject1Action = object => setObjectAction({
    reducerName: OBJECT_REDUCER1,
    object,
})

export const setObject2Action = object => setObjectAction({
    reducerName: OBJECT_REDUCER2,
    object,
})

export const updateObjectTimestampAction = payload => ({
    type: UPDATE_OBJECT_TIMESTAMP,
    payload,
    meta: { reducerName: OBJECT_REDUCER_EXTENDED },
})
