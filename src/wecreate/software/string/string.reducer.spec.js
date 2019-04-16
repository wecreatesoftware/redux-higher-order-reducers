import { stringReducer } from "./string.reducer"
import {
    RESET_STRING,
    SET_STRING,
} from "./string.types"

describe("string.reducer", () => {
    const reducerName = "reducerName"
    const MY_CUSTOM_ACTION = "MY_CUSTOM_ACTION"

    const extendedReducer = (state, { type, payload }) => {
        switch (type) {
            case MY_CUSTOM_ACTION:
                return payload.toUpperCase()
            default:
                return payload.toLowerCase()
        }
    }

    let state

    beforeEach(() => {
        state = "default-state"
    })

    describe("safety nets", () => {
        [
            { desc: "no options", expected: "" },
            { desc: "options with only reducer name", options: { reducerName }, expected: "" },
            { desc: "options with reducer name and initialState", options: { reducerName, initialState: null }, expected: null },
        ].forEach(({ desc, expected, options }) => {
            it(`should return initialState: ${desc}`, () => {
                expect(
                    stringReducer(options)(),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    describe("RESET_STRING", () => {
        const action = {
            type: RESET_STRING,
            meta: { reducerName },
        }

        it("should return initialState", () => {
            expect(
                stringReducer({ reducerName })(state, action),
            ).toEqual(
                "",
            )
        })
    })

    describe("SET_STRING", () => {
        const action = {
            type: SET_STRING,
            payload: "new-string",
            meta: { reducerName },
        }

        it("should return a brand new state", () => {
            expect(
                stringReducer({ reducerName })(state, action),
            ).toEqual(
                "new-string",
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
                stringReducer({ reducerName })(undefined, action),
            ).toEqual(
                "",
            )
        })
    })

    describe("extended reducer", () => {
        let action = {
            type: "MY_CUSTOM_ACTION",
            payload: "TitleCase",
            meta: { reducerName },
        }

        it("should return updated state", () => {
            expect(
                stringReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                "TITLECASE",
            )
        })

        it("should return default state", () => {
            action = {
                ...action,
                type: "UNKNOWN",
            }

            expect(
                stringReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                "titlecase"
            )
        })
    })
})
