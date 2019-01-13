import React from "react"
import PropTypes from "prop-types"

export const StateComponent = ({ state }) => <pre>{ JSON.stringify(state, undefined, 2) }</pre>

StateComponent.propTypes = {
    state: PropTypes.shape().isRequired,
}
