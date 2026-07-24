import { useEffect, useState } from "react";
import { API_URL } from "./BAS_URL/BAS_URL";
import ContactList from "./component/ContactList/ContantList";
import ContactForm from "./component/ContactForm/ContactForm";
import Modal from "./component/modal/Modal";
import SearchList from "./component/search/search";

function App() {
  /// usstate 
  // part of hok
  const [contacts, setContacts] = useState([]);
  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  //edit 
  const [isEdit, setIsEdit] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  //search 
  const [search, setSearch] = useState("");
  // sort
  const [sort, setSort] = useState("");

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

  //edit 
  function editHandler(contact) {
    setCurrentContact(contact);
    setIsEdit(true);
    setIsModalOpen(true);
  }
  // favorite
  async function favoriteHandler(contact) {
    try {
      await fetch(`${API_URL}/${contact.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contact,
          favorite: !contact.favorite,
        }),
      });

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  }
  // functioon filter
  const filteredContacts =[...contacts]
    .filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "asc") {
        return a.name.localeCompare(b.name);
      }

      if (sort === "desc") {
        return b.name.localeCompare(a.name);
      }

      return 0;
    });

  //totalContact
  const totalContact = contacts.length;

  // part of return 

  return (

    <div className="App container mx-auto p-5">
      <SearchList setSort={setSort} sort={sort} setSearch={setSearch} search={search} totalContact={totalContact} />
      <ContactForm
        fetchContacts={fetchContacts}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        currentContact={currentContact}
        setCurrentContact={setCurrentContact}
      />
      <Modal setIsModalOpen={setIsModalOpen} />
      <ContactList contacts={filteredContacts} deleteHandler={deleteHandler} editHandler={editHandler} favoriteHandler={favoriteHandler} />
    </div>
  );
}

export default App;