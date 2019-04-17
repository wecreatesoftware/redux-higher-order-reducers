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
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Number", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: 0,
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Boolean", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: true,
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Undefined", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: undefined,
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Symbol", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: Symbol("symbol"),
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Function", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: () => ({}),
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Date", () => {
                expect(
                    () => setObjectAction({
                        reducerName,
                        payload: new Date(),
                    }),
                ).toThrow("Action payload must be of type Object")
            })
        })
        describe("updateObjectAction", () => {
            it("should throw Error for Array", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: [],
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Number", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: 0,
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Boolean", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: true,
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Set", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: new Set([ { foo: "bar" } ]),
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Undefined", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: undefined,
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Symbol", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: Symbol("symbol"),
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Function", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: () => ({}),
                    }),
                ).toThrow("Action payload must be of type Object")
            })

            it("should throw Error for Date", () => {
                expect(
                    () => updateObjectAction({
                        reducerName,
                        payload: new Date(),
                    }),
                ).toThrow("Action payload must be of type Object")
            })
        })
    })
})
