import contactReducer from './contact'

const initialState = {
    getContactResult: false,
    getContactLoading: false,
    getContactError: false,
    addContactResult: false,
    addContactLoading: false,
    addContactError: false,
    deleteContactResult: false,
    deleteContactLoading: false,
    deleteContactError: false,
    detailContactResult: false,
    updateContactResult: false,
    updateContactLoading: false,
    updateContactError: false,
}

const combineReducers = reducers => {
    return (state, action) => {
        return Object.keys(reducers).reduce(
            (acc, prop) => {
                return ({
                    ...acc,
                    ...reducers[prop]({ [prop]: acc[prop] }, action),
                })
            },
            state
        )
    }
}

const appReducers = combineReducers({
    contactReducer,
})

export { initialState, combineReducers, appReducers }