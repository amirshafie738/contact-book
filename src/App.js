import { useEffect, useState } from "react";
import { API_URL } from "./BAS_URL/BAS_URL";
import ContactList from "./component/ContactList/ContantList";

function App() {

  // part of hok
  const [Contacts, setContacts] = useState([])

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

  // part of return 

  return (
    
    <div className="App container mx-auto p-5">
      
      <h1 className="text-3xl font-bold text-center mb-5">
        Contact Book
      </h1>

      <ContactList Contacts={Contacts}/>
    </div>
  );
}

export default App;