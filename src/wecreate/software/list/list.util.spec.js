import {
    addItem,
    addItems,
    insertItem,
    removeItem,
    removeItemByKey,
    updateItem,
    updateItemByKey,
    updateItemsByKey,
    updateValueAllItems,
} from "./list.util"

describe("list.util", () => {
    let state

    const key = "id"
    const item = { id: 1000 }
    const item2 = { id: 2000 }

    beforeEach(() => {
        state = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
        ]
    })

    describe("insertItem", () => {
        [
            { desc: "at index 0", payload: { item, index: 0 }, expected: [ 1000, 0, 1, 2, 3, 4 ] },
            { desc: "at index 1", payload: { item, index: 1 }, expected: [ 0, 1000, 1, 2, 3, 4 ] },
            { desc: "at index 2", payload: { item, index: 2 }, expected: [ 0, 1, 1000, 2, 3, 4 ] },
            { desc: "at index 3", payload: { item, index: 3 }, expected: [ 0, 1, 2, 1000, 3, 4 ] },
            { desc: "at index 4", payload: { item, index: 4 }, expected: [ 0, 1, 2, 3, 1000, 4 ] },
            { desc: "at index 5", payload: { item, index: 5 }, expected: [ 0, 1, 2, 3, 4, 1000 ] },
            { desc: "at the end, index > length", payload: { item, index: 99 }, expected: [ 0, 1, 2, 3, 4, 1000 ] },
            { desc: "at the beginning, index < 0 ", payload: { item, index: -99 }, expected: [ 1000, 0, 1, 2, 3, 4 ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should insert item: ${desc}`, () => {
                expect(
                    insertItem({ state, payload }).map(({ id }) => id),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("removeItem", () => {
        [
            { desc: "at index 0", payload: { index: 0 }, expected: [ 1, 2, 3, 4 ] },
            { desc: "at index 1", payload: { index: 1 }, expected: [ 0, 2, 3, 4 ] },
            { desc: "at index 2", payload: { index: 2 }, expected: [ 0, 1, 3, 4 ] },
            { desc: "at index 3", payload: { index: 3 }, expected: [ 0, 1, 2, 4 ] },
            { desc: "at index 4", payload: { index: 4 }, expected: [ 0, 1, 2, 3 ] },
            { desc: "none, index out of bounds", payload: { index: 5 }, expected: [ 0, 1, 2, 3, 4 ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should remove item: ${desc}`, () => {
                expect(
                    removeItem({ state, payload }).map(({ id }) => id),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("removeItemByKey", () => {
        [
            { desc: "key id value 0", payload: { item: { id: 0 } }, expected: [ 1, 2, 3, 4 ] },
            { desc: "key id value 1", payload: { item: { id: 1 } }, expected: [ 0, 2, 3, 4 ] },
            { desc: "key id value 2", payload: { item: { id: 2 } }, expected: [ 0, 1, 3, 4 ] },
            { desc: "key id value 3", payload: { item: { id: 3 } }, expected: [ 0, 1, 2, 4 ] },
            { desc: "key id value 4", payload: { item: { id: 4 } }, expected: [ 0, 1, 2, 3 ] },
            { desc: "none, id value not found", payload: { item: { id: 5 } }, expected: [ 0, 1, 2, 3, 4 ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should remove item: ${desc}`, () => {
                expect(
                    removeItemByKey({ state, payload, key }).map(({ id }) => id),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("updateItem", () => {
        [
            { desc: "at index 0", payload: { item: { id: 0, updated: true }, index: 0 }, expected: [ true, undefined, undefined, undefined, undefined ] },
            { desc: "at index 1", payload: { item: { id: 1, updated: true }, index: 1 }, expected: [ undefined, true, undefined, undefined, undefined ] },
            { desc: "at index 2", payload: { item: { id: 2, updated: true }, index: 2 }, expected: [ undefined, undefined, true, undefined, undefined ] },
            { desc: "at index 3", payload: { item: { id: 3, updated: true }, index: 3 }, expected: [ undefined, undefined, undefined, true, undefined ] },
            { desc: "at index 4", payload: { item: { id: 4, updated: true }, index: 4 }, expected: [ undefined, undefined, undefined, undefined, true ] },
            { desc: "none, index out of bounds", payload: { item: { id: 5, updated: true }, index: 5 }, expected: [ undefined, undefined, undefined, undefined, undefined ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should update item: ${desc}`, () => {
                expect(
                    updateItem({ state, payload }).map(({ updated }) => updated),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("updateItemByKey", () => {
        [
            { desc: "key id value 0", payload: { item: { id: 0, updated: true } }, expected: [ true, undefined, undefined, undefined, undefined ] },
            { desc: "key id value 1", payload: { item: { id: 1, updated: true } }, expected: [ undefined, true, undefined, undefined, undefined ] },
            { desc: "key id value 2", payload: { item: { id: 2, updated: true } }, expected: [ undefined, undefined, true, undefined, undefined ] },
            { desc: "key id value 3", payload: { item: { id: 3, updated: true } }, expected: [ undefined, undefined, undefined, true, undefined ] },
            { desc: "key id value 4", payload: { item: { id: 4, updated: true } }, expected: [ undefined, undefined, undefined, undefined, true ] },
            { desc: "none, id value not found", payload: { item: { id: 5, updated: true } }, expected: [ undefined, undefined, undefined, undefined, undefined ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should update item: ${desc}`, () => {
                expect(
                    updateItemByKey({ state, payload, key }).map(({ updated }) => updated),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("updateItemsByKey", () => {
        [
            { desc: "key id value 0 and 1", payload: { items: [ { id: 0, updated: true }, { id: 1, updated: true } ] }, expected: [ true, true, undefined, undefined, undefined ] },
            { desc: "key id value 1 and 2", payload: { items: [ { id: 1, updated: true }, { id: 2, updated: true } ] }, expected: [ undefined, true, true, undefined, undefined ] },
            { desc: "key id value 2 and 3", payload: { items: [ { id: 2, updated: true }, { id: 3, updated: true } ] }, expected: [ undefined, undefined, true, true, undefined ] },
            { desc: "key id value 3 and 4", payload: { items: [ { id: 3, updated: true }, { id: 4, updated: true } ] }, expected: [ undefined, undefined, undefined, true, true ] },
            { desc: "key id value 4 and 5", payload: { items: [ { id: 4, updated: true }, { id: 5, updated: true } ] }, expected: [ undefined, undefined, undefined, undefined, true ] },
            { desc: "key id value 2 and 4", payload: { items: [ { id: 2, updated: true }, { id: 4, updated: true } ] }, expected: [ undefined, undefined, true, undefined, true ] },
            { desc: "key id value 3, 6 not found", payload: { items: [ { id: 3, updated: true }, { id: 6, updated: true } ] }, expected: [ undefined, undefined, undefined, true, undefined ] },
            { desc: "none, id values not found", payload: { items: [ { id: 5, updated: true }, { id: 6, updated: true } ] }, expected: [ undefined, undefined, undefined, undefined, undefined ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should update items: ${desc}`, () => {
                expect(
                    updateItemsByKey({ state, payload, key }).map(({ updated }) => updated),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("updateValueAllItems", () => {
        it("should update items with new payload key/value pair", () => {
            expect(
                updateValueAllItems({ state, payload: { collapsed: false } }),
            ).toEqual([
                {
                    collapsed: false,
                    id: 0,
                },
                {
                    collapsed: false,
                    id: 1,
                },
                {
                    collapsed: false,
                    id: 2,
                },
                {
                    collapsed: false,
                    id: 3,
                },
                {
                    collapsed: false,
                    id: 4,
                },
            ])
        })

        it("should update items with new payload key/value pairs", () => {
            expect(
                updateValueAllItems({
                    state,
                    payload: {
                        collapsed: false,
                        foo: "bar",
                        updated: true,
                    },
                }),
            ).toEqual([
                {
                    collapsed: false,
                    foo: "bar",
                    id: 0,
                    updated: true,
                },
                {
                    collapsed: false,
                    foo: "bar",
                    id: 1,
                    updated: true,
                },
                {
                    collapsed: false,
                    foo: "bar",
                    id: 2,
                    updated: true,
                },
                {
                    collapsed: false,
                    foo: "bar",
                    id: 3,
                    updated: true,
                },
                {
                    collapsed: false,
                    foo: "bar",
                    id: 4,
                    updated: true,
                },
            ])
        })
    })

    describe("addItem", () => {
        [
            { desc: "at the end", payload: item, expected: [ 0, 1, 2, 3, 4, 1000 ] },
            { desc: "at the end again", payload: item, expected: [ 0, 1, 2, 3, 4, 1000 ] },
            { desc: "at the end still", payload: item, expected: [ 0, 1, 2, 3, 4, 1000 ] },
            { desc: "at the end always", payload: item, expected: [ 0, 1, 2, 3, 4, 1000 ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should add item: ${desc}`, () => {
                expect(
                    addItem({ state, payload }).map(({ id }) => id),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("addItems", () => {
        [
            { desc: "at the end", payload: [ item, item2 ], expected: [ 0, 1, 2, 3, 4, 1000, 2000 ] },
            { desc: "at the end again", payload: [ item, item2 ], expected: [ 0, 1, 2, 3, 4, 1000, 2000 ] },
            { desc: "at the end still", payload: [ item, item2 ], expected: [ 0, 1, 2, 3, 4, 1000, 2000 ] },
            { desc: "at the end always", payload: [ item, item2 ], expected: [ 0, 1, 2, 3, 4, 1000, 2000 ] },
        ].forEach(({ desc, expected, payload }) => {
            it(`should add items: ${desc}`, () => {
                expect(
                    addItems({ state, payload }).map(({ id }) => id),
                ).toEqual(
                    expected,
                )
            })
        })
    })
})
