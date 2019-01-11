import React, { Component } from "react"

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
                state,
                updateObject1,
                updateObject2
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
                    <br/>
                    <button onClick={ resetObject1 }>Reset Object Reducer 1</button>
                    <button onClick={ resetObject2 }>Reset Object Reducer 2</button>
                    <br/>
                    <button onClick={ () => setObject1({ cool: "beans" }) }>Set Object Reducer 1</button>
                    <button onClick={ () => setObject2({ cooler: "beans" }) }>Set Object Reducer 2</button>
                </div>
                <pre>{ JSON.stringify(state, undefined, 2) }</pre>
            </div>
        )
    }
}
