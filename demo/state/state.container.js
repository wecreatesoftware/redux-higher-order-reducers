import { connect } from "react-redux"
import { StateComponent } from "./state.component"

const mapStateToProps = state => ({ state })

export const StateContainer = connect(
    mapStateToProps,
    null,
)(StateComponent)
