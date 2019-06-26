import {
    incrementNumberAction,
    decrementNumberAction,
    resetNumberAction,
    setNumberAction,
} from "./number.actions"
import {
    INCREMENT_NUMBER,
    DECREMENT_NUMBER,
    RESET_NUMBER,
    SET_NUMBER } from "./number.types"

describe("client/reducers/numberReducer/number.actions", () => {
    const reducerName = "reducerName"
    const number = 7

    describe("incrementNumberAction", () => {
        it("should create an action to increment number", () => {
            expect(
                incrementNumberAction({
                    reducerName,
                }),
            ).toEqual({
                type: INCREMENT_NUMBER,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                incrementNumberAction({
                    reducerName,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: INCREMENT_NUMBER,
                meta: {
                    reducerName,
                    foo: "bar",
                },
            })
        })
    })

    describe("decrementNumberAction", () => {
        it("should create an action to decrement number", () => {
            expect(
                decrementNumberAction({
                    reducerName,
                }),
            ).toEqual({
                type: DECREMENT_NUMBER,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                decrementNumberAction({
                    reducerName,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: DECREMENT_NUMBER,
                meta: {
                    reducerName,
                    foo: "bar",
                },
            })
        })
    })

    describe("resetNumberAction", () => {
        it("should create an action to reset number", () => {
            expect(
                resetNumberAction({
                    reducerName,
                }),
            ).toEqual({
                type: RESET_NUMBER,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                resetNumberAction({
                    reducerName,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: RESET_NUMBER,
                meta: {
                    reducerName,
                    foo: "bar",
                },
            })
        })
    })

    describe("setNumberAction", () => {
        it("should create an action to set number", () => {
            expect(
                setNumberAction({
                    reducerName,
                    number,
                }),
            ).toEqual({
                type: SET_NUMBER,
                payload: number,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                setNumberAction({
                    reducerName,
                    number,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: SET_NUMBER,
                payload: number,
                meta: {
                    reducerName,
                    foo: "bar",
                },
            })
        })
    })

    describe("error", () => {
        it("should throw Error for Object", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: { foo: "bar" },
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Array", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: [],
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for String", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: "test string",
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Boolean", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: true,
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Set", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: new Set([ { foo: "bar" } ]),
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Undefined", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: undefined,
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Null", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: null,
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Symbol", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: Symbol("symbol"),
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Function", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: () => ({}),
                }),
            ).toThrow("Action payload must be of type Number")
        })

        it("should throw Error for Date", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: new Date(),
                }),
            ).toThrow("Action payload must be of type Number")
        })
    })
})
