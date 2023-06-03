import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [contactList, setContactList] = useState([]);

  function addContactList(event) {
    event.preventDefault();
    const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phone: phone,
    };
    setContactList([...contactList, contact]);

    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  }

  return (
    <>
      <h1>Contact Form</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={addContactList}
      >
        <input
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <ul style={{ textAlign: "left", listStyle: "none" }}>
        {contactList.map((contact, index) => (
          <li key={index}>
            <h2>
              {contact.lastName}, {contact.firstName}
            </h2>
            <h3>{contact.phone}</h3>
            <p>{contact.address}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
