function ContactCard({ contact, deleteHandler, editHandler,favoriteHandler }) {
  return (
    <div className="card bg-base-100 shadow-md border">
      <div className="card-body">
        <p className="flex justify-end items-center gap-2">
          <button  onClick={() => favoriteHandler(contact)} className="text-2xl">
            <span
              className={contact.favorite ? "text-red-500" : "text-gray-400"}
            >
              ♥
            </span>
          </button>
        </p>
        <h2 className="card-title">{contact.name}</h2>

        <p>
          <span className="font-semibold">Phone:</span> {contact.phone}
        </p>

        <p>
          <span className="font-semibold">Job:</span> {contact.job}
        </p>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={() => editHandler(contact)} className="btn btn-warning btn-sm">Edit</button>

          <button
            onClick={() => deleteHandler(contact.id)}
            className="btn btn-error btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
