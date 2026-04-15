export default function BookingForm({ name, setName, email, setEmail, onSubmit }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <input
        placeholder="Your Name"
        className="border p-2 w-full mb-2"
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={e => setEmail(e.target.value)}
      />

      <button
        onClick={onSubmit}
        className="bg-blue-600 text-white w-full py-2 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
}