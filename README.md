# @wecreatesoftware/redux-higher-order-reducers
https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic

How to use the reusable reducers ...

```javascript
import { listReducer } from "@wecreatesoftware/redux-higher-order-reducers"
import { LIST_A, LIST_B, LIST_C, OBJECT_A, OBJECT_B } from "./some/constant/file"

export const reducers = combineReducers({
  [LIST_A]: listReducer({ reducerName: LIST_A }),
  [LIST_B]: listReducer({ reducerName: LIST_B }),
  [LIST_C]: listReducer({ reducerName: LIST_C, key: "id" }),
  [OBJECT_A]: listReducer({ reducerName: OBJECT_A }),
  [OBJECT_B]: listReducer({ reducerName: OBJECT_B })
})
```


in progress ...
