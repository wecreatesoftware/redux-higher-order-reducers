# redux-higher-order-reducers

[![NPM Version](https://img.shields.io/npm/v/@wecreatesoftware/redux-higher-order-reducers.svg?branch=master)](https://www.npmjs.com/package/@wecreatesoftware/redux-higher-order-reducers)
[![Build Status](https://travis-ci.org/wecreatesoftware/redux-higher-order-reducers.svg?branch=master)](https://travis-ci.org/wecreatesoftware/redux-higher-order-reducers)
[![License](https://img.shields.io/npm/l/@wecreatesoftware/redux-higher-order-reducers.svg)](https://github.com/wecreatesoftware/redux-higher-order-reducers/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/wecreatesoftware/redux-higher-order-reducers/badge.svg?branch=master)](https://coveralls.io/github/wecreatesoftware/redux-higher-order-reducers?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/npm/@wecreatesoftware/redux-higher-order-reducers/badge.svg)](https://snyk.io/test/npm/@wecreatesoftware/redux-higher-order-reducers)
[![Downloads](https://img.shields.io/npm/dt/@wecreatesoftware/redux-higher-order-reducers.svg)](https://www.npmjs.com/package/@wecreatesoftware/redux-higher-order-reducers) 

https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic
How to use the reusable reducers ...

[JS Docs](https://doc.esdoc.org/github.com/wecreatesoftware/redux-higher-order-reducers/)

Currently, there is stringReducer, booleanReducer, listReducer and objectReducer ...

```javascript
import { 
    listReducer, 
    objectReducer,
    stringReducer,
    booleanReducer,
    numberReducer,
} from "@wecreatesoftware/redux-higher-order-reducers"
import { 
    LIST_A, 
    LIST_B, 
    LIST_C, 
    OBJECT_A, 
    OBJECT_B,
    STRING_A,
    STRING_B,
    BOOLEAN_A,
    NUMBER_A,
} from "../some/constant/file"

export const reducers = combineReducers({
    [ LIST_A ]: listReducer({ reducerName: LIST_A }),
    [ LIST_B ]: listReducer({ reducerName: LIST_B }),
    [ LIST_C ]: listReducer({ 
        reducerName: LIST_C, 
        key: "id",
    }),
    [ OBJECT_A ]: objectReducer({ reducerName: OBJECT_A }),
    [ OBJECT_B ]: objectReducer({ reducerName: OBJECT_B }),
    [ STRING_A ]: stringReducer({ reducerName: STRING_A }),
    [ STRING_B ]: stringReducer({ reducerName: STRING_B }),
    [ BOOLEAN_A ]: booleanReducer({ reducerName: BOOLEAN_A }),
    [ NUMBER_A ]: numberReducer({ reducerName: NUMBER_A }),
})
```

Now that the store has the reducer, we need to dispatch actions.  Everything is the same as usual but now we need to tell the action which "reducer" to update.

## List Reducer
* addItemAction - add item to list (end).
* addItemsAction - add items to list (end).
* insertItemAction - insert item into list at given index.
* removeItemAction - remove item from list at given index.
* removeItemByKeyAction - remove item from list by "key".
* updateItemAction - update item at given index.
* updateItemByKeyAction - update item by "key".
* updateItemsByKeyAction - update items by "key".
* updateValueAllItemsAction - update key/value pair(s) on all items.
* resetListAction - reset list to initial state (default []).
* setListAction - completely use new state and override current.

```javascript
addItemAction({ 
    reducerName: LIST_A, 
    item: { id: 1 },
})

addItemsAction({ 
    reducerName: LIST_A, 
    items: [ { id: 1 } ],
})

insertItemAction({ 
    reducerName: LIST_A, 
    item: { id: 1 }, 
    index: 3,
})

removeItemAction({
    reducerName: LIST_A, 
    index: 3,
})

removeItemByKeyAction({ 
    reducerName: LIST_C, 
    item: { id: 1 },
})

updateItemAction({ 
    reducerName: LIST_A, 
    item: { 
        id: 1, 
        newKey: "newValue" 
    }, 
    index: 3,
})

updateItemByKeyAction({ 
    reducerName: LIST_C, 
    item: {
        id: 1, 
        foo: "bar" 
    },
})

updateItemsByKeyAction({ 
    reducerName: LIST_C, 
    items: [ 
        {
            id: 1, 
            foo: "bar" 
        }, 
        {
            id: 2, 
            cool: "beans" 
        },
    ] 
})

updateValueAllItemsAction({ 
    reducerName: LIST_C, 
    keyValuePairs: {
        foo: bar,
        updated: true,
        collapsed: true,
    }
})

resetListAction({ reducerName: LIST_A }))

setListAction({ 
    reducerName: LIST_A, 
    payload: [],
})
```

## Object Reducer
* updateObjectAction - update object key/value, can pass multiple key/value pair.
* resetObjectAction - reset object to initial state (default {}).
* setObjectAction - completely use new state and override current.
    
```javascript
updateObjectAction({ 
    reducerName: OBJECT_A, 
    payload: { loading: true }, 
})

resetObjectAction({ reducerName: OBJECT_A })

setObjectAction({ 
    reducerName: OBJECT_B, 
    payload: {},
})
```

## String Reducer
* resetStringAction - reset string to initial state (default "").
* setStringAction - completely use new state and override current.
    
```javascript
resetStringAction({ reducerName: STRING_A })

setStringAction({ 
    reducerName: STRING_B, 
    payload: "foo bar",
})
```

## Boolean Reducer
* resetBooleanAction - reset string to initial state (default false).
* setBooleanAction - completely use new state and override current.
* toggleBooleanAction - toggle the state of the boolean.
    
```javascript
resetBooleanAction({ reducerName: BOOLEAN_A })

setBooleanAction({ 
    reducerName: BOOLEAN_A, 
    payload: true,
})

toggleBooleanAction({ reducerName: BOOLEAN_A })

```

## Number Reducer
* incrementNumberAction - increment number.
* decrementNumberAction - decrement number.
* resetNumberAction - reset number.
* setNumberAction - set number.
    
```javascript
incrementNumberAction({ reducerName: NUMBER_A })

decrementNumberAction({ reducerName: NUMBER_A })

resetNumberAction({ reducerName: NUMBER_A })

setNumberAction({ 
    reducerName: BOOLEAN_A, 
    number: 100,
})

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

export const updateSomeNameAction = payload => updateObjectAction({ 
    reducerName: SOME_NAME,
    payload,
})

dispatch(
    updateSomeNameAction({ 
        loading: false, 
        cool: "beans", 
        foo: "bar",
    })
)
```

## Extended Reducer
Have an edge case that just can't be covered by the basic actions/cases?  The idea for extendedReducer allows you to give your own custom reducer to the higher order reducer with your own action/cases.
Lets have a look ...

```javascript
import { objectReducer } from "@wecreatesoftware/redux-higher-order-reducers"
import { SOME_NAME } from "../some/constant/file"

const extendedReducer = (state, { type, payload }) => {
    switch (type) {
        case "MY_CUSTOM_ACTION":
            return {
                ...state,
                ...payload,
                lastUpdated: new Date().getTime(),
            }
        default:
            return state
    }
}

export const reducers = combineReducers({
    [ SOME_NAME ]: objectReducer({ 
        reducerName: SOME_NAME, 
        extendedReducer,
    }),
})

export const myCustomAction = payload => ({ 
    type: "MY_CUSTOM_ACTION", 
    payload,
    meta: { reducerName: SOME_NAME },
})

dispatch(myCustomAction({ 
    loading: false, 
    cool: "beans", 
    foo: "bar",
}))

```
The above dispatch will flow through the higher order reducer, find no case, fall into default case, and then call the extendedReducer, allowing the extended reducer to do any sort of logic to the state.

Here it will return ... 
```javascript
state = {
    loading: false, 
    cool: "beans", 
    foo: "bar",
    lastUpdated: 1554174417035, //timestamp of when it was updated 
}
```

The above capabilty also helps with middleware checking for a specific type asthe higher order reducer uses the same generic action for updates.

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
