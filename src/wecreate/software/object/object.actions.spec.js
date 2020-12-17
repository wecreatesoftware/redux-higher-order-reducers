import {
    resetObjectAction,
    setObjectAction,
    updateObjectAction,
} from "./object.actions"
import {
    RESET_OBJECT,
    SET_OBJECT,
    UPDATE_OBJECT,
} from "./object.types"

describe("object.actions", () => {
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

    it("should create an action to update key value pair", () => {
        expect(
            updateObjectAction({ reducerName, payload: { updated: true } }),
        ).toEqual({
            type: UPDATE_OBJECT,
            payload: { updated: true },
            meta: { reducerName: "reducerName" },
        })
    })

    it("should create an action to update key value pairs", () => {
        expect(
            updateObjectAction({ reducerName, payload: { updated: true, alsoUpdated: true } }),
        ).toEqual({
            type: UPDATE_OBJECT,
            payload: {
                alsoUpdated: true,
                updated: true,
            },
            meta: { reducerName: "reducerName" },
        })
    })

    it("should create an action to reset object", () => {
        expect(
            resetObjectAction({ reducerName }),
        ).toEqual({
            type: RESET_OBJECT,
            meta: { reducerName: "reducerName" },
        })
    })

    it("should create an action to set object", () => {
        expect(
            setObjectAction({ reducerName, payload: { id: 0 } }),
        ).toEqual({
            type: SET_OBJECT,
            payload: { id: 0 },
            meta: { reducerName: "reducerName" },
        })
    })

    describe("error", () => {
        describe("setObjectAction", () => {
            it("should throw Error for Array", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: [],
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[[]] must be of type Object")
            })

            it("should throw Error for Number", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: 0,
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[0] must be of type Object")
            })

            it("should throw Error for Boolean", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: true,
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[true] must be of type Object")
            })

            it("should throw Error for Undefined", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: undefined,
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[undefined] must be of type Object")
            })

            it("should throw Error for Symbol", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: Symbol("symbol"),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[undefined] must be of type Object")
            })

            it("should throw Error for Function", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: () => ({}),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[undefined] must be of type Object")
            })

            it("should throw Error for Date", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: new Date(),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(setObjectAction) => Action payload[\"2016-06-20T12:08:10.000Z\"] must be of type Object")
            })
        })
        describe("updateObjectAction", () => {
            it("should throw Error for Array", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: [],
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[[]] must be of type Object")
            })

            it("should throw Error for Number", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: 0,
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[0] must be of type Object")
            })

            it("should throw Error for Boolean", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: true,
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[true] must be of type Object")
            })

            it("should throw Error for Set", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: new Set([ { foo: "bar" } ]),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[{}] must be of type Object")
            })

            it("should throw Error for Undefined", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: undefined,
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[undefined] must be of type Object")
            })

            it("should throw Error for Symbol", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: Symbol("symbol"),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[undefined] must be of type Object")
            })

            it("should throw Error for Function", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: () => ({}),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[undefined] must be of type Object")
            })

            it("should throw Error for Date", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: new Date(),
                    }),
                ).toThrow("@wecreatesoftware/redux-higher-order-reducers(updateObjectAction) => Action payload[\"2016-06-20T12:08:10.000Z\"] must be of type Object")
            })
        })
    })
})
