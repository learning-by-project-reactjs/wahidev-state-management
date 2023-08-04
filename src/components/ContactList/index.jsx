import { useEffect } from "react"
import { useAppState } from "../../contexts/appState"
import { deleteContact, getContactList, detailContact } from "../../actions/contactAction"

function ContactList() {
    const [state, dispatch] = useAppState()
    const { getContactResult, getContactLoading, getContactError, deleteContactResult } = state

    useEffect(() => {
        getContactList(dispatch)
    }, [dispatch])

    useEffect(() => {
        if (deleteContactResult) {
            getContactList(dispatch)
        }
    }, [dispatch, deleteContactResult])

   

    return (
        <div>
            {getContactResult ?
                getContactResult.map((contact) => {
                    return (
                        <p key={contact.id}>
                            {contact.name} - {contact.phone} 
                            <button style={{ marginRight: '5px', marginLeft: '5px' }} onClick={() => detailContact(dispatch, contact)}>Edit</button>
                            <button onClick={() => deleteContact(dispatch, contact.id)}>Delete</button>
                        </p>

                    )
                }) : getContactLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>{getContactError ? getContactError : "Error"}</p>
                )
            }
        </div>
    )
}

export default ContactList