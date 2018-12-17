import { insertItemAction, removeItemAction, removeItemByKeyAction, updateItemAction, updateItemByKeyAction } from "./list.actions"

describe("list.actions", () => {
    const reducerName = "reducerName"
    const index = 0
    const item = { id: 0 }

    it("should create an action to insert item", () => {
        expect(
            insertItemAction({ item, index, reducerName })
        ).toEqual({
            type: "INSERT_ITEM",
            payload: {
                index: 0,
                item: { id: 0 }
            },
            meta: { reducerName: "reducerName" }
        })
    })

    it("should create an action to remove item", () => {
        expect(
            removeItemAction({ index, reducerName })
        ).toEqual({
            type: "REMOVE_ITEM",
            payload: { index: 0 },
            meta: { reducerName: "reducerName" }
        })
    })

    it("should create an action to remove item by key", () => {
        expect(
            removeItemByKeyAction({ item, reducerName })
        ).toEqual({
            type: "REMOVE_ITEM_BY_KEY",
            payload: { item: { id: 0 } },
            meta: { reducerName: "reducerName" }
        })
    })

    it("should create an action to update item by index", () => {
        expect(
            updateItemAction({ item, index, reducerName })
        ).toEqual({
            type: "UPDATE_ITEM",
            payload: {
                index: 0,
                item: { id: 0 }
            },
            meta: { reducerName: "reducerName" }
        })
    })

    it("should create an action to update item", () => {
        expect(
            updateItemByKeyAction({ item, reducerName })
        ).toEqual({
            type: "UPDATE_ITEM_BY_KEY",
            payload: { item: { id: 0 } },
            meta: { reducerName: "reducerName" }
        })
    })
})