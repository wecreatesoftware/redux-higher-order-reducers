import {
    resetBooleanAction,
    setBooleanAction,
    toggleBooleanAction,
} from "./boolean.actions"
import {
    RESET_BOOLEAN,
    SET_BOOLEAN,
    TOGGLE_BOOLEAN,
} from "./boolean.types"

describe("boolean.actions", () => {
    const reducerName = "reducerName"
    const boolean = false

    describe("resetBooleanAction", () => {
        it("should create an action to reset boolean", () => {
            expect(
                resetBooleanAction({
                    reducerName,
                }),
            ).toEqual({
                type: RESET_BOOLEAN,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                resetBooleanAction({
                    reducerName,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: RESET_BOOLEAN,
                meta: {
                    reducerName,
                    foo: "bar",
                },
            })
        })
    })

    describe("toggleBooleanAction", () => {
        it("should create an action to toggle boolean", () => {
            expect(
                toggleBooleanAction({
                    reducerName,
                }),
            ).toEqual({
                type: TOGGLE_BOOLEAN,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                resetBooleanAction({
                    reducerName,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: RESET_BOOLEAN,
                meta: {
                    reducerName,
                    foo: "bar",
                },
            })
        })
    })

    describe("setBooleanAction", () => {
        it("should create an action to set boolean", () => {
            expect(
                setBooleanAction({
                    reducerName,
                    boolean,
                }),
            ).toEqual({
                type: SET_BOOLEAN,
                payload: boolean,
                meta: { reducerName },
            })
        })

        it("should include additional meta fields", () => {
            expect(
                setBooleanAction({
                    reducerName,
                    boolean,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: SET_BOOLEAN,
                payload: boolean,
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
                () => setBooleanAction({
                    reducerName,
                    boolean: { foo: "bar" },
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Array", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: [],
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Number", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: 0,
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for String", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: "true",
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Set", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: new Set([ { foo: "bar" } ]),
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Undefined", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: undefined,
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Null", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: null,
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Symbol", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: Symbol("symbol"),
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Function", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: () => ({}),
                }),
            ).toThrow("Action payload must be of type Boolean")
        })

        it("should throw Error for Date", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: new Date(),
                }),
            ).toThrow("Action payload must be of type Boolean")
        })
    })
})
