import { connect } from "react-redux"
import { ObjectReducerComponent } from "./object.reducer.component"
import {
    resetObject1Action,
    resetObject2Action,
    setObject1Action,
    setObject2Action,
    updateObject1Action,
    updateObject2Action
} from "./object.reducer.actions"

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => ({
    resetObject1: () => dispatch(resetObject1Action()),
    resetObject2: () => dispatch(resetObject2Action()),
    setObject1: object => dispatch(setObject1Action(object)),
    setObject2: object => dispatch(setObject2Action(object)),
    updateObject1: updates => dispatch(updateObject1Action(updates)),
    updateObject2: updates => dispatch(updateObject2Action(updates))
})

export const ObjectReducerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ObjectReducerComponent)
