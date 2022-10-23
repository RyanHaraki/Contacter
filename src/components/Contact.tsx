interface ContactDetails {
  name: string;
  email: string;
  setContacts: (param: JSON) => void;
}

const Contact = ({ name, email, setContacts }: ContactDetails) => {
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const removeContact = (name: string) => {
    let contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

    let newContacts = contacts.filter((contact: any) => contact.name !== name);

    localStorage.setItem("contacts", JSON.stringify(newContacts));

    setContacts(JSON.parse(localStorage.getItem("contacts") || "[]"));
  };

  return (
    <div
      onClick={copyEmail}
      className="flex cursor-pointer items-center justify-between w-full rounded-md bg-white p-4"
    >
      <div className="flex items-center space-x-1">
        <p>{name}</p>
        <p className="text-sm text-gray-400">| {email}</p>
      </div>

      <img
        className="w-8 p-1 cursor-pointer rounded-full hover:bg-gray-200"
        src="./delete.png"
        alt="delete"
        onClick={() => removeContact(name)}
      />
    </div>
  );
};

export default Contact;
