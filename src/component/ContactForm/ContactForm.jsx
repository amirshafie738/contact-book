import { useEffect, useState } from "react";
import { API_URL } from "../../BAS_URL/BAS_URL";

function ContactForm({
  fetchContacts,
  isModalOpen,
  setIsModalOpen,
  isEdit,
  setIsEdit,
  currentContact,
  setCurrentContact,
}) {
  //loading sunbmit
  const [submitLoading, setSubmitLoading] = useState(false);
  // form value state
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    job: "",
    favorite: false,
  });

  // submit function
  async function submitHandler(e) {
    e.preventDefault();
    setSubmitLoading(true);

    if (!formValue.name || !formValue.phone || !formValue.job) {
      alert("Please fill in all fields.", setSubmitLoading(false));
      return;
    }

    try {
      if (isEdit) {
        await fetch(`${API_URL}/${currentContact.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValue),
        });
        fetchContacts();
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValue),
        });

        fetchContacts();

        setFormValue({
          name: "",
          phone: "",
          job: "",
          favorite: false,
        });

        closeAll();
      }
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  }
  function closeAll() {
    setFormValue({
      name: "",
      phone: "",
      job: "",
      favorite: false,
    });
    setIsModalOpen(false);
    setCurrentContact(null);
    setIsEdit(false);
  }

  // useEffect for editing
  useEffect(() => {
    if (currentContact) {
      setFormValue({
        name: currentContact.name,
        phone: currentContact.phone,
        job: currentContact.job,
        favorite: currentContact.favorite,
      });
    }
  }, [currentContact]);
  return (
    <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          type="button"
          className="absolute text-gray-500 top-1 right-1 text-xl font-semibold cursor-pointer"
          onClick={() => closeAll()}
        >
          ✕
        </button>
        <form onSubmit={submitHandler} className="border rounded-lg p-4 mb-5">
          <h2 className="text-xl font-semibold mb-4">
            {isEdit ? "Edit contact" : "Add Contact"}
          </h2>

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
          {/* submit button */}
          <button className="btn btn-primary w-full" disabled={submitLoading}>
            {submitLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Saving...
              </>
            ) : (
              <span>{isEdit ? "Update Contact" : "Add Contact"}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
