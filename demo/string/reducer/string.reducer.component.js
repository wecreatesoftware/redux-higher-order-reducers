import React, { Component } from "react"
import PropTypes from "prop-types"

export class StringReducerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {
            props: {
                resetString1Action,
                resetString2Action,
                setString1Action,
                setString2Action,
                setStringLowerCaseAction,
                setStringUpperCaseAction,
            },
            state: {
                value,
            },
        } = this

        return (
            <div>
                <div>
                    Value: <input onChange={ ({ target: { value } }) => this.setState({ value }) }/>
                </div>
                <div>
                    <button onClick={ () => setStringLowerCaseAction(value) }>Update String Case (Lower) Reducer (Extended)</button>
                    <button onClick={ () => setStringUpperCaseAction(value) }>Update String Case (Upper) Reducer (Extended)</button>
                    <br/>
                    <button onClick={ resetString1Action }>Reset String Reducer 1</button>
                    <button onClick={ resetString2Action }>Reset String Reducer 2</button>
                    <br/>
                    <button onClick={ () => setString1Action(value) }>Set String Reducer 1</button>
                    <button onClick={ () => setString2Action(value) }>Set String Reducer 2</button>
                </div>
            </div>
        )
    }
}

StringReducerComponent.propTypes = {
    resetString1Action: PropTypes.func.isRequired,
    resetString2Action: PropTypes.func.isRequired,
    setString1Action: PropTypes.func.isRequired,
    setString2Action: PropTypes.func.isRequired,
    setStringLowerCaseAction: PropTypes.func.isRequired,
    setStringUpperCaseAction: PropTypes.func.isRequired,
}
