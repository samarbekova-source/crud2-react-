import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function save() {
    let newContact = {
      name,
      phone,
      id: Date.now(),
    };
    addContact(newContact);
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
      />
      <button onClick={save}>Save</button>
    </div>
  );
};

export default AddContact;
