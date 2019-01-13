import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { reducers } from "./reducers"
import { ObjectReducerContainer } from "./object/reducer/object.reducer.container"
import { StateContainer } from "./state/state.container"

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <ObjectReducerContainer/> <br/>
        <StateContainer/>
    </Provider>,
    document.getElementById("demo"),
)
