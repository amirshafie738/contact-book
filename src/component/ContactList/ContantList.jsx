import ContactCard from "../ContactCard/ContactCard";

function ContactList({
  contacts,
  deleteHandler,
  editHandler,
  favoriteHandler,
}) {
  if (contacts.length === 0) {
    return (
      <h2 className="text-center text-xl font-semibold mt-5">
        No contact found
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          favoriteHandler={favoriteHandler}
        />
      ))}
    </div>
  );
}

export default ContactList;
