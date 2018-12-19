import { INSERT_ITEM, listReducer, REMOVE_ITEM, REMOVE_ITEM_BY_KEY, RESET_LIST, SET_LIST, UPDATE_ITEM, UPDATE_ITEM_BY_KEY } from "./list.reducer"

describe("list.reducer", () => {
    const reducerName = "reducerName"
    let state

    beforeEach(() => {
        state = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
        ]
    })

    describe("safety nets", () => {
        [
            { desc: "no options", expected: [] },
            { desc: "options with only reducer name", options: { reducerName }, expected: [] },
            { desc: "options with reducer name and initialState", options: { reducerName, initialState: null }, expected: null }
        ].forEach(({ desc, expected, options }) => {
            it(`should return initialState: ${desc}`, () => {
                expect(
                    listReducer(options)()
                ).toEqual(
                    expected
                )
            })
        })
    })

    describe("INSERT_ITEM", () => {
        const item = { id: 1000 }
        const action = {
            type: INSERT_ITEM,
            meta: { reducerName }
        };

        [
            { desc: "at index 0", payload: { item, index: 0 }, expected: [1000, 0, 1, 2, 3, 4] },
            { desc: "at index 1", payload: { item, index: 1 }, expected: [0, 1000, 1, 2, 3, 4] },
            { desc: "at index 2", payload: { item, index: 2 }, expected: [0, 1, 1000, 2, 3, 4] },
            { desc: "at index 3", payload: { item, index: 3 }, expected: [0, 1, 2, 1000, 3, 4] },
            { desc: "at index 4", payload: { item, index: 4 }, expected: [0, 1, 2, 3, 1000, 4] },
            { desc: "at index 5", payload: { item, index: 5 }, expected: [0, 1, 2, 3, 4, 1000] },
            { desc: "at the end, index out of bounds", payload: { item, index: 99 }, expected: [0, 1, 2, 3, 4, 1000] },
            { desc: "at the beginning, index out of bounds", payload: { item, index: -99 }, expected: [1000, 0, 1, 2, 3, 4] }
        ].forEach(({ desc, expected, payload }) => {
            it(`should insert item: ${desc}`, () => {
                expect(
                    listReducer({ reducerName })(state, { ...action, payload }).map(({ id }) => id)
                ).toEqual(
                    expected
                )
            })
        })
    })

    describe("REMOVE_ITEM", () => {
        const action = {
            type: REMOVE_ITEM,
            meta: { reducerName }
        };

        [
            { desc: "at index 0", payload: { index: 0 }, expected: [1, 2, 3, 4] },
            { desc: "at index 1", payload: { index: 1 }, expected: [0, 2, 3, 4] },
            { desc: "at index 2", payload: { index: 2 }, expected: [0, 1, 3, 4] },
            { desc: "at index 3", payload: { index: 3 }, expected: [0, 1, 2, 4] },
            { desc: "at index 4", payload: { index: 4 }, expected: [0, 1, 2, 3] },
            { desc: "none, index out of bounds", payload: { index: 5 }, expected: [0, 1, 2, 3, 4] }
        ].forEach(({ desc, expected, payload }) => {
            it(`should remove item: ${desc}`, () => {
                expect(
                    listReducer({ reducerName })(state, { ...action, payload }).map(({ id }) => id)
                ).toEqual(
                    expected
                )
            })
        })
    })

    describe("REMOVE_ITEM_BY_KEY", () => {
        const action = {
            type: REMOVE_ITEM_BY_KEY,
            meta: { reducerName }
        };

        [
            { desc: "key id value 0", payload: { item: { id: 0 } }, expected: [1, 2, 3, 4] },
            { desc: "key id value 1", payload: { item: { id: 1 } }, expected: [0, 2, 3, 4] },
            { desc: "key id value 2", payload: { item: { id: 2 } }, expected: [0, 1, 3, 4] },
            { desc: "key id value 3", payload: { item: { id: 3 } }, expected: [0, 1, 2, 4] },
            { desc: "key id value 4", payload: { item: { id: 4 } }, expected: [0, 1, 2, 3] },
            { desc: "none, id value not found", payload: { item: { id: 5 } }, expected: [0, 1, 2, 3, 4] }
        ].forEach(({ desc, expected, payload }) => {
            it(`should remove item: ${desc}`, () => {
                expect(
                    listReducer({ reducerName, key: "id" })(state, { ...action, payload }).map(({ id }) => id)
                ).toEqual(
                    expected
                )
            })
        })
    })

    describe("UPDATE_OBJECT", () => {
        const item = { updated: true }
        const action = {
            type: UPDATE_ITEM,
            meta: { reducerName }
        };

        [
            { desc: "at index 0", payload: { item, index: 0 }, expected: [true, undefined, undefined, undefined, undefined] },
            { desc: "at index 1", payload: { item, index: 1 }, expected: [undefined, true, undefined, undefined, undefined] },
            { desc: "at index 2", payload: { item, index: 2 }, expected: [undefined, undefined, true, undefined, undefined] },
            { desc: "at index 3", payload: { item, index: 3 }, expected: [undefined, undefined, undefined, true, undefined] },
            { desc: "at index 4", payload: { item, index: 4 }, expected: [undefined, undefined, undefined, undefined, true] },
            { desc: "none, index out of bounds", payload: { item, index: 5 }, expected: [undefined, undefined, undefined, undefined, undefined] }
        ].forEach(({ desc, expected, payload }) => {
            it(`should update item: ${desc}`, () => {
                expect(
                    listReducer({ reducerName })(state, { ...action, payload }).map(({ updated }) => updated)
                ).toEqual(
                    expected
                )
            })
        })
    })

    describe("UPDATE_ITEM_BY_KEY", () => {
        const action = {
            type: UPDATE_ITEM_BY_KEY,
            meta: { reducerName }
        };

        [
            { desc: "key id value 0", payload: { item: { id: 0, updated: true } }, expected: [true, undefined, undefined, undefined, undefined] },
            { desc: "key id value 1", payload: { item: { id: 1, updated: true } }, expected: [undefined, true, undefined, undefined, undefined] },
            { desc: "key id value 2", payload: { item: { id: 2, updated: true } }, expected: [undefined, undefined, true, undefined, undefined] },
            { desc: "key id value 3", payload: { item: { id: 3, updated: true } }, expected: [undefined, undefined, undefined, true, undefined] },
            { desc: "key id value 4", payload: { item: { id: 4, updated: true } }, expected: [undefined, undefined, undefined, undefined, true] },
            { desc: "none, id value not found", payload: { item: { id: 5, updated: true } }, expected: [undefined, undefined, undefined, undefined, undefined] }
        ].forEach(({ desc, expected, payload }) => {
            it(`should update item: ${desc}`, () => {
                expect(
                    listReducer({ reducerName, key: "id" })(state, { ...action, payload }).map(({ updated }) => updated)
                ).toEqual(
                    expected
                )
            })
        })
    })

    describe("RESET_LIST", () => {
        const action = {
            type: RESET_LIST,
            meta: { reducerName }
        }

        it("should return initialState", () => {
            expect(
                listReducer({ reducerName })(state, { ...action })
            ).toEqual(
                []
            )
        })
    })

    describe("SET_LIST", () => {
        const action = {
            type: SET_LIST,
            payload: [{ id: 0 }],
            meta: { reducerName }
        }

        it("should return a brand new state", () => {
            expect(
                listReducer({ reducerName })(state, { ...action })
            ).toEqual(
                [{ id: 0 }]
            )
        })
    })

    describe("default", () => {
        const action = {
            type: "UNKNOWN",
            meta: { reducerName }
        }

        it("should return state", () => {
            expect(
                listReducer({ reducerName })([], { ...action })
            ).toEqual(
                []
            )
        })
    })

    describe("error", () => {
        const action = {
            meta: { reducerName },
            error: true
        }

        it("should return state", () => {
            expect(
                listReducer({ reducerName })([], { ...action })
            ).toEqual(
                []
            )
        })
    })
})
