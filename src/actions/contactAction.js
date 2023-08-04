import axios from 'axios'

export const GET_CONTACT_LIST = "GET_CONTACT_LIST"
export const ADD_CONTACT = "ADD_CONTACT"
export const DELETE_CONTACT = "DELETE_CONTACT"
export const DETAIL_CONTACT = "DETAIL_CONTACT"
export const UPDATE_CONTACT = "UPDATE_CONTACT"

export const getContactList = (dispatch) => {
    // loading
    dispatch({
        type: GET_CONTACT_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })
    // get
    axios({
        method: 'GET',
        url: 'http://localhost:7000/contacts',
        timeout: 120000
    })
    .then((response) => {
        dispatch({
            type: GET_CONTACT_LIST,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false
            }
        })
    })
    .catch((error) => {
        dispatch({
            type: GET_CONTACT_LIST,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message
            }
        })
    })
}

export const addContact = (dispatch, data) => {
    // loading
    dispatch({
        type: ADD_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'POST',
        url: 'http://localhost:7000/contacts',
        timeout: 120000,
        data
    })
    .then((response) => {
        dispatch({
            type: ADD_CONTACT,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false
            }
        })
    })
    .catch((error) => {
        dispatch({
            type: ADD_CONTACT,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message
            }
        })
    })
}

export const deleteContact = (dispatch, id) => {
    // loading
    dispatch({
        type: DELETE_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'DELETE',
        url: 'http://localhost:7000/contacts/' + id,
        timeout: 120000,
    })
    .then((response) => {
        dispatch({
            type: DELETE_CONTACT,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false
            }
        })
    })
    .catch((error) => {
        dispatch({
            type: DELETE_CONTACT,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message
            }
        })
    })
}

export const detailContact = (dispatch, data) => {
    dispatch({
        type: DETAIL_CONTACT,
        payload: {
            data,
        }
    })
}

export const updateContact = (dispatch, data) => {
    // loading
    dispatch({
        type: UPDATE_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'PUT',
        url: 'http://localhost:7000/contacts/' + data.id,
        timeout: 120000,
        data
    })
    .then((response) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false
            }
        })
    })
    .catch((error) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message
            }
        })
    })
}