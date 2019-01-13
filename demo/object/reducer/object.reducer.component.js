import React, { Component } from "react"
import PropTypes from "prop-types"

export class ObjectReducerComponent extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        const {
            props: {
                resetObject1,
                resetObject2,
                setObject1,
                setObject2,
                updateObject1,
                updateObject2,
                updateObjectTimestamp,
            },
            state: {
                key,
                value,
            },
        } = this

        return (
            <div>
                <div>
                    Key: <input onChange={ ({ target: { value: key } }) => this.setState({ key }) }/>
                    Value: <input onChange={ ({ target: { value } }) => this.setState({ value }) }/>
                </div>
                <div>
                    <button onClick={ () => updateObject1({ [ key ]: value }) }>Update Object Reducer 1</button>
                    <button onClick={ () => updateObject2({ [ key ]: value }) }>Update Object Reducer 2</button>
                    <button onClick={ () => updateObjectTimestamp({ [ key ]: value }) }>Update Object Reducer (Extended)</button>
                    <br/>
                    <button onClick={ resetObject1 }>Reset Object Reducer 1</button>
                    <button onClick={ resetObject2 }>Reset Object Reducer 2</button>
                    <br/>
                    <button onClick={ () => setObject1({ cool: "beans" }) }>Set Object Reducer 1</button>
                    <button onClick={ () => setObject2({ cooler: "beans" }) }>Set Object Reducer 2</button>
                </div>
            </div>
        )
    }
}

ObjectReducerComponent.propTypes = {
    resetObject1: PropTypes.func.isRequired,
    resetObject2: PropTypes.func.isRequired,
    setObject1: PropTypes.func.isRequired,
    setObject2: PropTypes.func.isRequired,
    updateObject1: PropTypes.func.isRequired,
    updateObject2: PropTypes.func.isRequired,
    updateObjectTimestamp: PropTypes.func.isRequired,
}
