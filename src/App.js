import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import List from "./components/List";

function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }
  console.log(contacts);

  function deleteContact(id) {
    let newArray = contacts.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setContacts(newArray);
  }
  return (
    <div className="App">
      <AddContact addContact={addContact} />
      <List contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
