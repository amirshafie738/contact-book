function ContactDetails({
    selectedContact,
    isDetailOpen,
    setIsDetailOpen,
  }) {
    if (!selectedContact) return null;
  
    return (
      <div className={`modal ${isDetailOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
  
          <h2 className="text-2xl font-bold mb-4">
            Contact Details
          </h2>
  
          <p>Name : {selectedContact.name}</p>
  
          <p>Phone : {selectedContact.phone}</p>
  
          <p>Job : {selectedContact.job}</p>
  
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => setIsDetailOpen(false)}
            >
              Close
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default ContactDetails;