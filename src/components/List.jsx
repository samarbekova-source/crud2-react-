import React from "react";

const List = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              {item.name}, {item.phone}
              <button onClick={() => deleteContact(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
