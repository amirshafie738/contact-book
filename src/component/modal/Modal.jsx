function Modal({setIsModalOpen={setIsModalOpen} }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-5">Contact Book</h1>
      <button
        className="btn btn-primary mb-5"
        onClick={() => setIsModalOpen(true)}
      >
        Add Contact
      </button>
    </>
  );
}
export default Modal