import { booleanReducer } from "./boolean.reducer"
import {
    RESET_BOOLEAN,
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

describe("boolean.reducer", () => {
    const reducerName = "reducerName"
    const MY_CUSTOM_ACTION = "MY_CUSTOM_ACTION"

    const extendedReducer = (state, { type }) => {
        switch (type) {
            case MY_CUSTOM_ACTION:
                return null
            default:
                return undefined
        }
    }

    let state

    beforeEach(() => {
        state = false
    })

    describe("safety nets", () => {
        [
            { desc: "no options", expected: false },
            { desc: "options with only reducer name", options: { reducerName }, expected: false },
            { desc: "options with reducer name and initialState", options: { reducerName, initialState: null }, expected: null },
        ].forEach(({ desc, expected, options }) => {
            it(`should return initialState: ${desc}`, () => {
                expect(
                    booleanReducer(options)(),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("RESET_BOOLEAN", () => {
        const action = {
            type: RESET_BOOLEAN,
            meta: { reducerName },
        }

        it("should return initialState", () => {
            expect(
                booleanReducer({ reducerName })(state, action),
            ).toEqual(
                false,
            )
        })
    })

    describe("TOGGLE_BOOLEAN", () => {
        const action = {
            type: TOGGLE_BOOLEAN,
            meta: { reducerName },
        }

        it("should return toggled", () => {
            expect(
                booleanReducer({ reducerName })(state, action),
            ).toEqual(
                true,
            )
        })
    })

    describe("SET_BOOLEAN", () => {
        const action = {
            type: SET_BOOLEAN,
            payload: true,
            meta: { reducerName },
        }

        it("should return a brand new state", () => {
            expect(
                booleanReducer({ reducerName })(state, action),
            ).toEqual(
                true,
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
                booleanReducer({ reducerName })(undefined, action),
            ).toEqual(
                false,
            )
        })
    })

    describe("extended reducer", () => {
        let action = {
            type: "MY_CUSTOM_ACTION",
            payload: true,
            meta: { reducerName },
        }

        it("should return updated state", () => {
            expect(
                booleanReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                null,
            )
        })

        it("should return default state", () => {
            action = {
                ...action,
                type: "UNKNOWN",
            }

            expect(
                booleanReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                undefined,
            )
        })
    })
})
