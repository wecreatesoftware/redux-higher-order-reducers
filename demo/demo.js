import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { reducers } from "./reducers"
import { ObjectReducerContainer } from "./object/reducer/object.reducer.container"
import { StateContainer } from "./state/state.container"
import { StringReducerContainer } from "./string/reducer/string.reducer.container"

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <ObjectReducerContainer/> <br/><br/>
        <StringReducerContainer/> <br/><br/><br/><br/>
        <StateContainer/>
    </Provider>,
    document.getElementById("demo"),
)
