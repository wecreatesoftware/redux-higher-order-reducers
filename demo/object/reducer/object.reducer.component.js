import React, { Component } from "react"
import PropTypes from "prop-types"

export class ObjectReducerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {
            props: {
                resetObject1Action,
                resetObject2Action,
                setObject1Action,
                setObject2Action,
                updateObject1Action,
                updateObject2Action,
                updateObjectTimestampAction,
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
                    <button onClick={ () => updateObject1Action({ [ key ]: value }) }>Update Object Reducer 1</button>
                    <button onClick={ () => updateObject2Action({ [ key ]: value }) }>Update Object Reducer 2</button>
                    <button onClick={ () => updateObjectTimestampAction({ [ key ]: value }) }>Update Object Reducer (Extended)</button>
                    <br/>
                    <button onClick={ resetObject1Action }>Reset Object Reducer 1</button>
                    <button onClick={ resetObject2Action }>Reset Object Reducer 2</button>
                    <br/>
                    <button onClick={ () => setObject1Action({ cool: "beans" }) }>Set Object Reducer 1</button>
                    <button onClick={ () => setObject2Action({ cooler: "beans" }) }>Set Object Reducer 2</button>
                </div>
            </div>
        )
    }
}

ObjectReducerComponent.propTypes = {
    resetObject1Action: PropTypes.func.isRequired,
    resetObject2Action: PropTypes.func.isRequired,
    setObject1Action: PropTypes.func.isRequired,
    setObject2Action: PropTypes.func.isRequired,
    updateObject1Action: PropTypes.func.isRequired,
    updateObject2Action: PropTypes.func.isRequired,
    updateObjectTimestampAction: PropTypes.func.isRequired,
}
