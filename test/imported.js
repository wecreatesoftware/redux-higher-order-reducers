const welcome = "welcome"
console.log({ welcome })

import { setObjectAction } from "../dist/redux.higher.order.reducers.es"
console.log(setObjectAction({ reducerName: "reducerName" }))