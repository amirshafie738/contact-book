import { useEffect, useState } from "react";
import { API_URL } from "./BAS_URL/BAS_URL";
import ContactList from "./component/ContactList/ContantList";
import ContactForm from "./component/ContactForm/ContactForm";
import Modal from "./component/modal/Modal";

function App() {
  /// usstate 
  // part of hok
  const [Contacts, setContacts] = useState([])
  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect
  useEffect(() => {
    fetchContacts()
  }, [])

  /// get api

  async function fetchContacts() {
    try {
      const response = await fetch(API_URL)
      const data = await response.json();
      setContacts(data)
    } catch (err) {
      console.log(err)
    }
  }
  // delete api
  async function deleteHandler(id) {
    const confirmDelete = window.confirm("are you sure?")
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      })
      fetchContacts()

    } catch (err) {
      console.log(err)
    }
  }

  // part of return 

  return (

    <div className="App container mx-auto p-5">

      <ContactForm
        fetchContacts={fetchContacts}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Modal setIsModalOpen={setIsModalOpen} />
      <ContactList Contacts={Contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;