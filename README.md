# @wecreatesoftware/redux-higher-order-reducers
[![NPM Version](https://img.shields.io/npm/v/@wecreatesoftware/redux-higher-order-reducers.svg?branch=master)](https://www.npmjs.com/package/@wecreatesoftware/redux-higher-order-reducers)
[![Build Status](https://travis-ci.org/wecreatesoftware/redux-higher-order-reducers.svg?branch=master)](https://travis-ci.org/wecreatesoftware/redux-higher-order-reducers.svg?branch=master) 

https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic

FYI: as of 2.0.0 I am trying to get the imports working correctly, if its completely broke, please submit an issue and use v1.4.0 until futher notice.

How to use the reusable reducers ...

Currently, there is a listReducer and objectReducer ... here is how to use them.

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

## List Reducer
* insertItemAction - insert item into list at given index.
* removeItemAction - remove item from list at given index.
* removeItemByKeyAction - remove item from list by "key".
* updateItemAction - update item at given index.
* updateItemByKeyAction - update item by "key".
* updateItemsByKeyAction - update items by "key".
* resetListAction - reset list to initial state (default []).
* setListAction - completely use new state and override current.


```javascript
dispatch(insertItemAction({ reducerName: LIST_A, item: { id: 1 }, index: 3 }))
dispatch(removeItemAction({ reducerName: LIST_A, index: 3 }))
dispatch(removeItemByKeyAction({ reducerName: LIST_C, item: { id: 1 } }))
dispatch(updateItemAction({ reducerName: LIST_A, item: { id: 1, newKey: "newValue" }, index: 3 }))
dispatch(updateItemByKeyAction({ reducerName: LIST_C, item: { id: 1, foo: "bar" } }))
dispatch(updateItemsByKeyAction({ reducerName: LIST_C, items: [ { id: 1, foo: "bar" }, { id: 2, cool: "beans" } ] }))
dispatch(resetListAction({ reducerName: LIST_A }))
dispatch(setListAction({ reducerName: LIST_A, list: []}))
```

## Object Reducer
* updateObjectAction - update object key/value, can pass multiple key/value pair.
* resetObjectAction - reset object to initial state (default {}).
* setObjectAction - completely use new state and override current.
    
```javascript
dispatch(updateObjectAction({ reducerName: OBJECT_A, updates: { loading: true } }))
dispatch(resetObjectAction({ reducerName: OBJECT_A }))
dispatch(setObjectAction({ reducerName: OBJECT_B, object: {}}))
```

It might be annoying constantly setting reducer name right?  I certainly think so ...
If you agree, you can do a curry function for each action for your reducers as follows.

```javascript
import { 
    objectReducer, 
    updateObjectAction 
} from "@wecreatesoftware/redux-higher-order-reducers"
import { SOME_NAME } from "../some/constant/file"

export const reducers = combineReducers({
  [ SOME_NAME ]: objectReducer({ reducerName: SOME_NAME }),
})

export const updateSomeNameAction = updates => updateObjectAction({ reducerName: SOME_NAME, updates })

dispatch(updateSomeNameAction({ loading: false, cool: "beans", foo: "bar" }))
```

Each reducer, consider it like a micro service, it does one thing and one thing well.


With a reducer handling very specific data, adding a library like [reselect](https://www.npmjs.com/package/reselect) makes it easy to select, combine, filter data.
Making selectors to get specific pieces of data allows you to select the exact information needed for the given component, vs giving the component some high level object and use a couple keys from it.

The selectors can easily make dumb components.  If where data was stored was, changed, the selectors can be easily updated without the components even knowing anything about the data structure... it also can clean up components by not having to do a lot of null checks.  Using default props to set lists to empty, bools to false/true, etc will allow destructured props not break in random scenarios.

```javascript
cannot destructure property of 'undefined' or 'null'
```

The usage of the higher order reducers are endless, you just have to be created.  I have been using them for a short time, and it has made my life a lot easier.  Little to no duplicate data, creating new components and getting data has been easy, and I never have to write crud reducers, reducer tests, actions, action tests anymore ;) !!

Demo: 
```
cd demo
npm run demo
```
