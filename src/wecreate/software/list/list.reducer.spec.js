import { listReducer } from "./list.reducer"
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
import {
    ADD_ITEM,
    ADD_ITEMS,
    INSERT_ITEM,
    REMOVE_ITEM,
    REMOVE_ITEM_BY_KEY,
    RESET_LIST,
    SET_LIST,
    UPDATE_ITEM,
    UPDATE_ITEM_BY_KEY,
    UPDATE_ITEMS_BY_KEY,
    UPDATE_VALUE_ALL_ITEMS,
} from "./list.types"

jest.mock("./list.util")

describe("list.reducer", () => {
    const index = 0
    const reducerName = "reducerName"
    const item = { id: 1000 }
    const MY_CUSTOM_ACTION = "MY_CUSTOM_ACTION"

    const extendedReducer = (state, { type, payload }) => {
        switch (type) {
            case MY_CUSTOM_ACTION:
                return state.map((curItem, curIndex) => {
                    if (curIndex !== payload.index) return curItem

                    return {
                        ...curItem,
                        ...payload.item,
                        extendedReducer: true,
                    }
                })
            default:
                return state.map(curItem => ({
                    ...curItem,
                    extendedReducer: true,
                }))
        }
    }

    let state
    let action

    beforeEach(() => {
        state = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
        ]
        action = {
            payload: {
                item,
                index,
            },
            meta: { reducerName },
        }
    })

    describe("safety nets", () => {
        [
            { desc: "no options", expected: [] },
            { desc: "options with only reducer name", options: { reducerName }, expected: [] },
            { desc: "options with reducer name and initialState", options: { reducerName, initialState: null }, expected: null },
        ].forEach(({ desc, expected, options }) => {
            it(`should return initialState: ${ desc }`, () => {
                expect(
                    listReducer(options)(),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("INSERT_ITEM", () => {
        it("should call insertItem", () => {
            action = {
                ...action,
                type: INSERT_ITEM,
            }
            listReducer({ reducerName })(state, action)

            expect(
                insertItem,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("REMOVE_ITEM", () => {
        it("should call removeItem", () => {
            action = {
                ...action,
                type: REMOVE_ITEM,
            }
            listReducer({ reducerName })(state, action)

            expect(
                removeItem,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("REMOVE_ITEM_BY_KEY", () => {
        it("should call removeItemByKey", () => {
            action = {
                ...action,
                type: REMOVE_ITEM_BY_KEY,
            }
            listReducer({ reducerName })(state, action)

            expect(
                removeItemByKey,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("UPDATE_ITEM", () => {
        it("should call updateItem", () => {
            action = {
                ...action,
                type: UPDATE_ITEM,
            }
            listReducer({ reducerName })(state, action)

            expect(
                updateItem,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("UPDATE_ITEM_BY_KEY", () => {
        it("should call updateItemByKey", () => {
            action = {
                ...action,
                type: UPDATE_ITEM_BY_KEY,
            }
            listReducer({ reducerName })(state, action)

            expect(
                updateItemByKey,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("UPDATE_ITEMS_BY_KEY", () => {
        it("should call updateItemsByKey", () => {
            action = {
                ...action,
                type: UPDATE_ITEMS_BY_KEY,
            }
            listReducer({ reducerName })(state, action)

            expect(
                updateItemsByKey,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("UPDATE_VALUE_ALL_ITEMS", () => {
        it("should call updateValueAllItems", () => {
            action = {
                ...action,
                type: UPDATE_VALUE_ALL_ITEMS,
            }
            listReducer({ reducerName })(state, action)

            expect(
                updateValueAllItems,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("RESET_LIST", () => {
        it("should reset list to initial state", () => {
            action = {
                ...action,
                type: RESET_LIST,
            }
            listReducer({ reducerName })(state, action)

            expect(
                listReducer({ reducerName })(state, action),
            ).toEqual(
                [],
            )
        })
    })

    describe("SET_LIST", () => {
        it("should return a brand new state", () => {
            action = {
                ...action,
                type: SET_LIST,
                payload: [ { id: 0 } ],
            }

            expect(
                listReducer({ reducerName })(state, action),
            ).toEqual(
                [ { id: 0 } ],
            )
        })
    })

    describe("default", () => {
        it("should return state", () => {
            action = {
                ...action,
                type: "UNKNOWN",
            }

            expect(
                listReducer({ reducerName })([], action),
            ).toEqual(
                [],
            )
        })
    })

    describe("error", () => {
        it("should return state", () => {
            action = {
                ...action,
                error: true,
            }

            expect(
                listReducer({ reducerName })([], action),
            ).toEqual(
                [],
            )
        })
    })

    describe("extended reducer", () => {
        it("should return updated item", () => {
            action = {
                ...action,
                type: MY_CUSTOM_ACTION,
            }

            expect(
                listReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                [
                    {
                        id: 1000,
                        extendedReducer: true,
                    },
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                ],
            )
        })

        it("should return default state", () => {
            action = {
                ...action,
                type: "UNKNOWN",
            }

            expect(
                listReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                [
                    {
                        id: 0,
                        extendedReducer: true,
                    },
                    {
                        id: 1,
                        extendedReducer: true,
                    },
                    {
                        id: 2,
                        extendedReducer: true,
                    },
                    {
                        id: 3,
                        extendedReducer: true,
                    },
                    {
                        id: 4,
                        extendedReducer: true,
                    },
                ],
            )
        })
    })

    describe("ADD_ITEM", () => {
        it("should call addItem", () => {
            action = {
                ...action,
                type: ADD_ITEM,
                payload: item,
            }
            listReducer({ reducerName })(state, action)

            expect(
                addItem,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })

    describe("ADD_ITEMS", () => {
        it("should call addItems", () => {
            action = {
                ...action,
                type: ADD_ITEMS,
                payload: [ item ],
            }
            listReducer({ reducerName })(state, action)

            expect(
                addItems,
            ).toHaveBeenCalledTimes(
                1,
            )
        })
    })
})
