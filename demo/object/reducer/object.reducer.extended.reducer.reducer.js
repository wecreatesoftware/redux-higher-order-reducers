import { UPDATE_OBJECT_TIMESTAMP } from "./object.reducer.types"

export const updateObjectTimestampReducer = (state, { type, payload }) => {
    switch (type) {
        case UPDATE_OBJECT_TIMESTAMP:
            return {
                ...state,
                ...payload,
                lastUpdated: new Date(),
            }
        default:
            return state
    }
}
