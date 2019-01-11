import { combineReducers } from "redux"
import { objectReducer } from "../src/wecreate/software/redux.higher.order.reducers"
import {
    OBJECT_REDUCER1,
    OBJECT_REDUCER2,
} from "./object/reducer/object.reducer.types"

export const reducers = combineReducers({
    [ OBJECT_REDUCER1 ]: objectReducer({ reducerName: OBJECT_REDUCER1 }),
    [ OBJECT_REDUCER2 ]: objectReducer({
        reducerName: OBJECT_REDUCER2,
        initialState: { foo: "bar" },
    }),
})
