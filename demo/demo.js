import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { reducers } from "./reducers"
import { ObjectReducerContainer } from "./object/reducer/object.reducer.container"

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <ObjectReducerContainer/>
    </Provider>,
    document.getElementById("demo"),
)
