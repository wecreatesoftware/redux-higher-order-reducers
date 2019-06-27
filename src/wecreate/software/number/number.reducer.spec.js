import { numberReducer } from "./number.reducer"
import {
    DECREMENT_NUMBER,
    INCREMENT_NUMBER,
    RESET_NUMBER,
    SET_NUMBER,
} from "./number.types"

describe("number.reducer", () => {
    const reducerName = "reducerName"
    const MY_CUSTOM_ACTION = "MY_CUSTOM_ACTION"

    const extendedReducer = (state, { type, payload }) => {
        switch (type) {
            case MY_CUSTOM_ACTION:
                return payload * 100
            default:
                return 9999
        }
    }

    let state

    describe("safety nets", () => {
        [
            { desc: "no options", expected: 0 },
            { desc: "options with only reducer name", options: { reducerName }, expected: 0 },
            { desc: "options with reducer name and initialState", options: { reducerName, initialState: null }, expected: null },
        ].forEach(({ desc, expected, options }) => {
            it(`should return initialState: ${desc}`, () => {
                expect(
                    numberReducer(options)(),
                ).toEqual(
                    expected,
                )
            })
        })
    })

    beforeEach(() => {
        state = 12
    })

    describe("case: INCREMENT_NUMBER", () => {
        const action = {
            type: INCREMENT_NUMBER,
            meta: { reducerName },
        }

        it("should increment state", () => {
            expect(
                numberReducer({ reducerName })(state, action),
            ).toEqual(13)
        })
    })

    describe("case: DECREMENT_NUMBER", () => {
        const action = {
            type: DECREMENT_NUMBER,
            meta: { reducerName },
        }

        it("should decrement state", () => {
            expect(
                numberReducer({ reducerName })(state, action),
            ).toEqual(
                11,
            )
        })

        it("should allow negative value", () => {
            state = 0

            expect(
                numberReducer({ reducerName, allowNegative: true })(state, action),
            ).toEqual(
                -1,
            )
        })

        it("should not allow negative value", () => {
            state = 0

            expect(
                numberReducer({ reducerName })(state, action),
            ).toEqual(0)
        })
    })

    describe("case: RESET_NUMBER", () => {
        const action = {
            type: RESET_NUMBER,
            meta: { reducerName },
        }

        it("should set the count", () => {
            expect(
                numberReducer({ reducerName })(state, action),
            ).toEqual(0)
        })
    })

    describe("case: SET_NUMBER", () => {
        const action = {
            type: SET_NUMBER,
            payload: 99,
            meta: { reducerName },
        }

        it("should set the count", () => {
            expect(
                numberReducer({ reducerName })(state, action),
            ).toEqual(99)
        })
    })

    describe("default", () => {
        it("should return state if valid action type not provided", () => {
            const action = {
                type: "unknown",
                meta: { reducerName },
            }

            expect(
                numberReducer({})(state, action),
            )
                .toEqual(12)
        })
    })

    describe("extended reducer", () => {
        let action = {
            type: "MY_CUSTOM_ACTION",
            payload: 5,
            meta: { reducerName },
        }

        it("should return updated state", () => {
            expect(
                numberReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                500,
            )
        })

        it("should return default state", () => {
            action = {
                ...action,
                type: "UNKNOWN",
            }

            expect(
                numberReducer({ reducerName, extendedReducer })(state, action),
            ).toEqual(
                9999,
            )
        })
    })
})
