import {
    resetStringAction,
    setStringAction,
} from "./string.actions"
import {
    RESET_STRING,
    SET_STRING,
} from "./string.types"

describe("string.actions", () => {
    const reducerName = "reducerName"
    const string = "string"

    describe("resetStringAction", () => {
        it("should create an action to reset string", () => {
            expect(
                resetStringAction({
                    reducerName,
                }),
            ).toEqual({
                type: RESET_STRING,
                meta: { reducerName },
            })
        })
    })

    describe("setStringAction", () => {
        it("should create an action to set string", () => {
            expect(
                setStringAction({
                    reducerName,
                    string,
                }),
            ).toEqual({
                type: SET_STRING,
                payload: string,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                setStringAction({
                    reducerName,
                    string,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: SET_STRING,
                payload: string,
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
                () => setStringAction({
                    reducerName,
                    string: { foo: "bar" },
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Array", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: [],
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Number", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: 0,
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Boolean", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: true,
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Set", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: new Set([ { foo: "bar" } ]),
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Undefined", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: undefined,
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Null", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: null,
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Symbol", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: Symbol("symbol"),
                }),
            ).toThrow("Action payload must be of type string")
        })

        it("should throw Error for Function", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: () => ({}),
                }),
            ).toThrow("Action payload must be of type string")
        })
    })
})
