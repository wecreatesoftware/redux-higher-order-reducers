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
    let spy
    beforeAll(() => {
        const mockDate = new Date(1466424490000)
        spy = jest
            .spyOn(global, "Date")
            .mockImplementation(() => mockDate)
    })
    afterAll(() => {
        spy.mockRestore()
    })

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
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[{\"foo\":\"bar\"}] must be of type Boolean")
        })

        it("should throw Error for Array", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: [],
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[[]] must be of type Boolean")
        })

        it("should throw Error for Number", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: 0,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[0] must be of type Boolean")
        })

        it("should throw Error for String", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: "true",
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[\"true\"] must be of type Boolean")
        })

        it("should throw Error for Set", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: new Set([ { foo: "bar" } ]),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[{}] must be of type Boolean")
        })

        it("should throw Error for Undefined", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: undefined,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[undefined] must be of type Boolean")
        })

        it("should throw Error for Null", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: null,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[null] must be of type Boolean")
        })

        it("should throw Error for Symbol", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: Symbol("symbol"),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[undefined] must be of type Boolean")
        })

        it("should throw Error for Function", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: () => ({}),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[undefined] must be of type Boolean")
        })

        it("should throw Error for Date", () => {
            expect(
                () => setBooleanAction({
                    reducerName,
                    boolean: new Date(),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setBooleanAction) => Action payload[\"2016-06-20T12:08:10.000Z\"] must be of type Boolean")
        })
    })
})
