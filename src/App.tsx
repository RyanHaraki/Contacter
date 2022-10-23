import React, { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import "./App.css";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contacts, setContacts] = useState(null) as any;

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts") || "[]"));
  }, []);

  return (
    <div className="App font-roboto">
      <Modal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        setContacts={setContacts}
      />

      {/* header */}
      <div className="bg-[#32292F] h-[50px] w-full flex items-center justify-between px-4">
        <p className="text-white text-lg font-medium">Contacter</p>
      </div>

      {/* body */}
      <div className="bg-[#e1e1e1] p-4 flex flex-col items-center justify-between h-[550px]">
        {/* contacts */}
        <div className="w-full space-y-2 overflow-y-scroll h-[500px]">
          {contacts?.map((contact: any) => (
            <Contact
              name={contact.name}
              email={contact.email}
              setContacts={setContacts}
            />
          ))}
        </div>
        {/* button */}
        <button
          onClick={() => setModalIsOpen(true)}
          className="bg-[#32292F] text-white font-bold text-lg w-full p-2 rounded-md mt-4"
        >
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default App;
