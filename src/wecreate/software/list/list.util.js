export const addItem = ({ state, payload }) => [ ...state, payload ]
export const addItems = ({ state, payload }) => [ ...state, ...payload ]
export const insertItem = ({ state, payload: { index, item } }) => [ ...state.slice(0, index), item, ...state.slice(index) ]

export const removeItem = ({ state, payload: { index } }) => [ ...state.slice(0, index), ...state.slice(index + 1) ]

export const removeItemByKey = ({ state, payload: { item }, key }) => {
    const index = state.findIndex(curItem => curItem[ key ] === item[ key ])

    return (index > -1) ? removeItem({ state, payload: { index } }) : state
}

export const removeItemsByKey = ({ state, payload: { items }, key }) => {
    const keys = items.map(item => item[ key ])
    return state.filter(item => !keys.includes(item[ key ]))
}

export const updateItem = ({ state, payload: { index, item } }) => state.map((curItem, curIndex) => {
    if (curIndex !== index) return curItem

    return { ...curItem, ...item }
})

export const updateItemByKey = ({ state, payload: { item }, key }) => state.map((curItem) => {
    if (curItem[ key ] !== item[ key ]) return curItem

    return { ...curItem, ...item }
})

export const updateItemsByKey = ({ state, payload: { items }, key }) => state.map((curItem) => {
    const item = items.find(it => curItem[ key ] === it[ key ])
    if (!item) return curItem

    return { ...curItem, ...item }
})

export const updateValueAllItems = ({ state, payload }) => state.map(curItem => ({ ...curItem, ...payload }))
