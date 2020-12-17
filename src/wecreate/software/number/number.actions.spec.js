import {
    decrementNumberAction,
    incrementNumberAction,
    resetNumberAction,
    setNumberAction,
} from "./number.actions"
import {
    DECREMENT_NUMBER,
    INCREMENT_NUMBER,
    RESET_NUMBER,
    SET_NUMBER,
} from "./number.types"

describe("number.actions", () => {
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
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[{\"foo\":\"bar\"}] must be of type Number")
        })

        it("should throw Error for Array", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: [],
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[[]] must be of type Number")
        })

        it("should throw Error for String", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: "test string",
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[\"test string\"] must be of type Number")
        })

        it("should throw Error for Boolean", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: true,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[true] must be of type Number")
        })

        it("should throw Error for Set", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: new Set([ { foo: "bar" } ]),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[{}] must be of type Number")
        })

        it("should throw Error for Undefined", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: undefined,
                }),
            ).toThrow(
                "@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[undefined] must be of type Number",
            )
        })

        it("should throw Error for Null", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: null,
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[null] must be of type Number")
        })

        it("should throw Error for Symbol", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: Symbol("symbol"),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[undefined] must be of type Number")
        })

        it("should throw Error for Function", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: () => ({}),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[undefined] must be of type Number")
        })

        it("should throw Error for Date", () => {
            expect(
                () => setNumberAction({
                    reducerName,
                    number: new Date(),
                }),
            ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setNumberAction) => Action payload[\"2016-06-20T12:08:10.000Z\"] must be of type Number")
        })
    })
})
