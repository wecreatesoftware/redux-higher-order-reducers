import { combineReducers } from "redux"
import { objectReducer } from "../src/wecreate/software/redux.higher.order.reducers"
import {
    OBJECT_REDUCER1,
    OBJECT_REDUCER2,
    OBJECT_REDUCER_EXTENDED,
} from "./object/reducer/object.reducer.types"
import { updateObjectTimestampReducer } from "./object/reducer/object.reducer.extended.reducer.reducer"

export const reducers = combineReducers({
    [ OBJECT_REDUCER1 ]: objectReducer({ reducerName: OBJECT_REDUCER1 }),
    [ OBJECT_REDUCER2 ]: objectReducer({
        reducerName: OBJECT_REDUCER2,
        initialState: { foo: "bar" },
    }),
    [ OBJECT_REDUCER_EXTENDED ]: objectReducer({
        reducerName: OBJECT_REDUCER_EXTENDED,
        extendedReducer: updateObjectTimestampReducer,
    }),
})
