import {
    resetStringAction,
    setStringAction,
} from "./string.actions"
import {
    RESET_STRING,
    SET_STRING,
} from "./string.types"

describe("string.actions", () => {
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

        it("should include additional meta fields", () => {
            expect(
                resetStringAction({
                    reducerName,
                    meta: { foo: "bar" },
                }),
            ).toEqual({
                type: RESET_STRING,
                meta: {
                    reducerName,
                    foo: "bar",
                },
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
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[{\"foo\":\"bar\"}] must be of type String")
        })

        it("should throw Error for Array", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: [],
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[[]] must be of type String")
        })

        it("should throw Error for Number", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: 0,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[0] must be of type String")
        })

        it("should throw Error for Boolean", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: true,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[true] must be of type String")
        })

        it("should throw Error for Set", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: new Set([ { foo: "bar" } ]),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[{}] must be of type String")
        })

        it("should throw Error for Undefined", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: undefined,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[undefined] must be of type String")
        })

        it("should throw Error for Null", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: null,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[null] must be of type String")
        })

        it("should throw Error for Symbol", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: Symbol("symbol"),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[undefined] must be of type String")
        })

        it("should throw Error for Function", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: () => ({}),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[undefined] must be of type String")
        })

        it("should throw Error for Date", () => {
            expect(
                () => setStringAction({
                    reducerName,
                    string: new Date(),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[\"2016-06-20T12:08:10.000Z\"] must be of type String")
        })
    })
})
