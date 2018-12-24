# @wecreatesoftware/redux-higher-order-reducers
https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic

How to use the reusable reducers ...

Currently, there is a listReducer and ObjectReducer ... here is how to use them.

```javascript
import { 
    listReducer, 
    objectReducer 
} from "@wecreatesoftware/redux-higher-order-reducers"
import { 
    LIST_A, 
    LIST_B, 
    LIST_C, 
    OBJECT_A, 
    OBJECT_B 
} from "../some/constant/file"

export const reducers = combineReducers({
  [ LIST_A ]: listReducer({ reducerName: LIST_A }),
  [ LIST_B ]: listReducer({ reducerName: LIST_B }),
  [ LIST_C ]: listReducer({ reducerName: LIST_C, key: "id" }),
  [ OBJECT_A ]: objectReducer({ reducerName: OBJECT_A }),
  [ OBJECT_B ]: objectReducer({ reducerName: OBJECT_B })
})
```

Now that the store has the reducer, we need to dispatch actions.  Everything is the same as usual but now we need to tell the action which "reducer" to update.

##List Reducer
* insertItemAction - insert item into list at given index.
* removeItemAction - remove item from list at given index.
* removeItemByKeyAction - remove item from list by "key".
* updateItemAction - update item at given index.
* updateItemByKeyAction - update item by "key".
* resetListAction - reset list to initial state (default []).
* setListAction - completely use new state and override current.


```javascript
dispatch(insertItemAction({ reducerName: LIST_A, item: { id: 1 }, index: 3 }))
dispatch(removeItemAction({ reducerName: LIST_A, index: 3 }))
dispatch(removeItemByKeyAction({ reducerName: LIST_A, item: { id: 1 } }))
dispatch(updateItemAction({ reducerName: LIST_A, item: { id: 1, newKey: "newValue" }, index: 3 }))
dispatch(updateItemByKeyAction({ reducerName: LIST_A, item: { id: 1, newKey: "newValue" } }))
dispatch(resetListAction())
dispatch(setListAction({ reducerName: LIST_A, list: []}))
```
