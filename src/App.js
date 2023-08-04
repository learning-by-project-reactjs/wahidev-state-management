import { ContactList, ContactForm } from "./components"

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Contact App</h1>
      <hr />
      <ContactForm />
      <hr />
      <ContactList />
    </div>
  );
}

export default App
