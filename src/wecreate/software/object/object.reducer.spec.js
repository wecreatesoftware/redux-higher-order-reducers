import { objectReducer } from "./object.reducer"
import {
    RESET_OBJECT,
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

describe("object.reducer", () => {
    const reducerName = "reducerName"
    const MY_CUSTOM_ACTION = "MY_CUSTOM_ACTION"

    const extendedReducer = (state, { type, payload }) => {
        switch (type) {
            case MY_CUSTOM_ACTION:
                return {
                    ...state,
                    ...payload,
                    extendedReducer: true,
                }
            default:
                return {
                    ...state,
                    extendedReducer: true,
                }
        }
    }

    let state

    beforeEach(() => {
        state = {
            id: 0,
        }
    })

    describe("safety nets", () => {
        [
            { desc: "no options", expected: {} },
            { desc: "options with only reducer name", options: { reducerName }, expected: {} },
            { desc: "options with reducer name and initialState", options: { reducerName, initialState: null }, expected: null },
        ].forEach(({ desc, expected, options }) => {
            it(`should return initialState: ${desc}`, () => {
                expect(
                    objectReducer(options)(),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("UPDATE_OBJECT", () => {
        const action = {
            type: UPDATE_OBJECT,
            meta: { reducerName },
        };

        [
            { desc: "null", payload: { id: null }, expected: { id: null } },
            { desc: "undefined", payload: { id: undefined }, expected: { id: undefined } },
            { desc: "new value", payload: { id: 1 }, expected: { id: 1 } },
            { desc: "new key value pair", payload: { newKey: "newValue" }, expected: { id: 0, newKey: "newValue" } },
        ].forEach(({ desc, expected, payload }) => {
            it(`should update item: ${desc}`, () => {
                expect(
                    objectReducer({ reducerName })(state, { ...action, payload }),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("RESET_OBJECT", () => {
        const action = {
            type: RESET_OBJECT,
            meta: { reducerName },
        }

        it("should return initialState", () => {
            expect(
                objectReducer({ reducerName })(state, action),
            ).toEqual(
                {},
            )
        })
    })

    describe("SET_OBJECT", () => {
        const action = {
            type: SET_OBJECT,
            payload: { brand: "new" },
            meta: { reducerName },
        }

        it("should return a brand new state", () => {
            expect(
                objectReducer({ reducerName })(state, action),
            ).toEqual(
                { brand: "new" },
            )
        })
    })

    describe("default", () => {
        const action = {
            type: "UNKNOWN",
            meta: { reducerName },
        }

        it("should return state", () => {
            expect(
                objectReducer({ reducerName })({}, action),
            ).toEqual(
                {},
            )
        })
    })

    describe("error", () => {
        const action = {
            type: UPDATE_OBJECT,
            payload: Error("error"),
            meta: { reducerName },
            error: true,
        }

        it("should return state with error", () => {
            expect(
                objectReducer({ reducerName })(state, action),
            ).toEqual({
                id: 0,
                error: "error",
            })
        })
    })

    describe("extended reducer", () => {
        let action = {
            type: "MY_CUSTOM_ACTION",
            payload: { foo: "bar", cool: "beans" },
            meta: { reducerName },
        }

        it("should return updated state", () => {
            expect(
                objectReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual({
                id: 0,
                foo: "bar",
                cool: "beans",
                extendedReducer: true,
            })
        })

        it("should return default state", () => {
            action = {
                ...action,
                type: "UNKNOWN",
            }

            expect(
                objectReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual({
                id: 0,
                extendedReducer: true,
            })
        })
    })
})
