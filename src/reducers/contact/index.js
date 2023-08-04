import { GET_CONTACT_LIST, ADD_CONTACT, DELETE_CONTACT, DETAIL_CONTACT, UPDATE_CONTACT } from "../../actions/contactAction"

const contact = (state, action) => {
    const { type } = action
    switch (type) {
        case GET_CONTACT_LIST:
            return {
                ...state,
                getContactResult: action.payload.data,
                getContactLoading: action.payload.loading,
                getContactError: action.payload.errorMessage
            }
        
        case ADD_CONTACT:
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading: action.payload.loading,
                addContactError: action.payload.errorMessage
            }
        case DELETE_CONTACT:
                return {
                    ...state,
                    deleteContactResult: action.payload.data,
                    deleteContactLoading: action.payload.loading,
                    deleteContactError: action.payload.errorMessage
                }
        case DETAIL_CONTACT:
                return {
                    ...state,
                    detailContactResult: action.payload.data,
                }
        case UPDATE_CONTACT:
                return {
                    ...state,
                    updateContactResult: action.payload.data,
                    updateContactLoading: action.payload.loading,
                    updateContactError: action.payload.errorMessage
                }
        default:
            return state
    }
}

export default contact