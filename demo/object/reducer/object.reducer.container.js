import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ObjectReducerComponent } from "./object.reducer.component"
import {
    resetObject1Action,
    resetObject2Action,
    setObject1Action,
    setObject2Action,
    updateObject1Action,
    updateObject2Action,
    updateObjectTimestampAction,
} from "./object.reducer.actions"

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        resetObject1: () => resetObject1Action(),
        resetObject2: () => resetObject2Action(),
        setObject1: object => setObject1Action(object),
        setObject2: object => setObject2Action(object),
        updateObject1: payload => updateObject1Action(payload),
        updateObject2: payload => updateObject2Action(payload),
        updateObjectTimestamp: payload => updateObjectTimestampAction(payload),
    }, dispatch)
)

export const ObjectReducerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ObjectReducerComponent)
