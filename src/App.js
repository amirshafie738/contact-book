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
    <div className="App">
      <ContactList Contacts={Contacts}/>
    </div>
  );
}

export default App;