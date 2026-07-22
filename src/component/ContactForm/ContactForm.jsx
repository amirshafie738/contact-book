import { useEffect, useState } from "react";
import { API_URL } from "../../BAS_URL/BAS_URL";

function ContactForm({ fetchContacts, isModalOpen, setIsModalOpen }) {
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    job: "",
    favorite: false,
  });
  async function submitHandler(e) {
    e.preventDefault();

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });

      fetchContacts();
      setFormValue(
        {
          name: "",
          phone: "",
          job: "",
          favorite: false,
        },
        setIsModalOpen(false)
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          type="button"
          className="absolute text-gray-500 top-1 right-1 text-xl font-semibold cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        <form onSubmit={submitHandler} className="border rounded-lg p-4 mb-5">
          <h2 className="text-xl font-semibold mb-4">Add Contact</h2>

          <input
            className="input input-bordered w-full mb-3"
            type="text"
            name="name"
            placeholder="Name"
            value={formValue.name}
            onChange={(e) =>
              setFormValue((prv) => ({ ...prv, name: e.target.value }))
            }
          />

          <input
            className="input input-bordered w-full mb-3"
            type="text"
            name="phone"
            placeholder="Phone"
            value={formValue.phone}
            onChange={(e) =>
              setFormValue((prv) => ({ ...prv, phone: e.target.value }))
            }
          />

          <input
            className="input input-bordered w-full mb-4"
            type="text"
            name="job"
            placeholder="Job"
            value={formValue.job}
            onChange={(e) =>
              setFormValue((prv) => ({ ...prv, job: e.target.value }))
            }
          />

          <button className="btn btn-primary w-full">Add Contact</button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
