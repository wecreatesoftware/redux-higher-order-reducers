import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StringReducerComponent } from "./string.reducer.component"
import {
    resetString1Action,
    resetString2Action,
    setString1Action,
    setString2Action,
    setStringLowerCaseAction,
    setStringUpperCaseAction,
} from "./string.reducer.actions"

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        resetString1Action,
        resetString2Action,
        setString1Action,
        setString2Action,
        setStringLowerCaseAction,
        setStringUpperCaseAction,
    }, dispatch)
)

export const StringReducerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StringReducerComponent)
