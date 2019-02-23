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
})
