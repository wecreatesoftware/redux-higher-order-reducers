import { insertItemAction, removeItemAction, removeItemByKeyAction, resetListAction, setListAction, updateItemAction, updateItemByKeyAction, updateItemsByKeyAction } from "./list.actions"
import { INSERT_ITEM, REMOVE_ITEM, REMOVE_ITEM_BY_KEY, RESET_LIST, SET_LIST, UPDATE_ITEM, UPDATE_ITEM_BY_KEY, UPDATE_ITEMS_BY_KEY } from "./list.reducer"

describe("list.actions", () => {
    const reducerName = "reducerName"
    const index = 0
    const item = { id: 0 }

    it("should create an action to insert item", () => {
        expect(
            insertItemAction({ item, index, reducerName })
        ).toEqual({
            type: INSERT_ITEM,
            payload: {
                index: 0,
                item
            },
            meta: { reducerName }
        })
    })

    it("should create an action to remove item", () => {
        expect(
            removeItemAction({ index, reducerName })
        ).toEqual({
            type: REMOVE_ITEM,
            payload: { index: 0 },
            meta: { reducerName }
        })
    })

    it("should create an action to remove item by key", () => {
        expect(
            removeItemByKeyAction({ item, reducerName })
        ).toEqual({
            type: REMOVE_ITEM_BY_KEY,
            payload: { item },
            meta: { reducerName }
        })
    })

    it("should create an action to update item by index", () => {
        expect(
            updateItemAction({ item, index, reducerName })
        ).toEqual({
            type: UPDATE_ITEM,
            payload: {
                index: 0,
                item
            },
            meta: { reducerName }
        })
    })

    it("should create an action to update item", () => {
        expect(
            updateItemByKeyAction({ item, reducerName })
        ).toEqual({
            type: UPDATE_ITEM_BY_KEY,
            payload: { item },
            meta: { reducerName }
        })
    })

    it("should create an action to update items by key", () => {
        const items = [item, item]

        expect(
            updateItemsByKeyAction({ items, reducerName })
        ).toEqual({
            type: UPDATE_ITEMS_BY_KEY,
            payload: { items },
            meta: { reducerName }
        })
    })

    it("should create an action to reset list", () => {
        expect(
            resetListAction({ reducerName })
        ).toEqual({
            type: RESET_LIST,
            meta: { reducerName }
        })
    })

    it("should create an action to set list", () => {
        expect(
            setListAction({ reducerName, list: [] })
        ).toEqual({
            type: SET_LIST,
            payload: [],
            meta: { reducerName }
        })
    })
})
