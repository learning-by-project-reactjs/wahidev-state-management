import { useEffect, useState } from "react"
import { useAppState } from "../../contexts/appState"
import { addContact, getContactList, updateContact } from "../../actions/contactAction"

function ContactForm() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [id, setId] = useState(false)
    const [state, dispatch] = useAppState()
    const { addContactResult, detailContactResult, updateContactResult } = state

    const handleSubmit = (event) => {
        event.preventDefault()
        if (id) {
            updateContact(dispatch, {id, name, phone})
        } else {
            addContact(dispatch, {name: name, phone: phone})
        }
    }

    useEffect(() => {
        if (addContactResult) {
            getContactList(dispatch)
            setName("")
            setPhone("")
        }
    }, [addContactResult, dispatch])

    useEffect(() => {
        if (detailContactResult) {
            setName(detailContactResult.name)
            setPhone(detailContactResult.phone)
            setId(detailContactResult.id)
        }
    }, [detailContactResult])

    useEffect(() => {
        if (updateContactResult) {
            getContactList(dispatch)
            setName("")
            setPhone("")
            setId(false)
        }
    }, [updateContactResult, dispatch])

    return (
        <div>
            <h4>{id ? "Edit Contact" : "Add Contact"}</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="name"
                    placeholder="Name...."
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="text" 
                    name="phone"
                    placeholder="Phone...."
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm