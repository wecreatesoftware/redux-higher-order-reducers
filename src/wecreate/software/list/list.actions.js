import { INSERT_ITEM, REMOVE_ITEM, REMOVE_ITEM_BY_KEY, UPDATE_ITEM, UPDATE_ITEM_BY_KEY } from "./list.reducer"

export const insertItemAction = ({ item, index, reducerName }) => ({ type: INSERT_ITEM, payload: { item, index }, meta: { reducerName } })
export const removeItemAction = ({ index, reducerName }) => ({ type: REMOVE_ITEM, payload: { index }, meta: { reducerName } })
export const removeItemByKeyAction = ({ item, reducerName }) => ({ type: REMOVE_ITEM_BY_KEY, payload: { item }, meta: { reducerName } })
export const updateItemAction = ({ item, index, reducerName }) => ({ type: UPDATE_ITEM, payload: { item, index }, meta: { reducerName } })
export const updateItemByKeyAction = ({ item, reducerName }) => ({ type: UPDATE_ITEM_BY_KEY, payload: { item }, meta: { reducerName } })
