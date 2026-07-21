import { useEffect, useState } from "react";
import { API_URL } from "./BAS_URL/BAS_URL";

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
      
    </div>
  );
}

export default App;