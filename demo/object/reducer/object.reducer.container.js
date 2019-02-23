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
        resetObject1Action,
        resetObject2Action,
        setObject1Action,
        setObject2Action,
        updateObject1Action,
        updateObject2Action,
        updateObjectTimestampAction,
    }, dispatch)
)

export const ObjectReducerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ObjectReducerComponent)
