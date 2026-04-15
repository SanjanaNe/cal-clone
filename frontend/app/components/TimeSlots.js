export default function TimeSlots({ setTime }) {
  const slots = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Available Slots</h2>

      {slots.map(slot => (
        <button
          key={slot}
          onClick={() => setTime(slot)}
          className="block w-full border p-2 mt-2 rounded hover:bg-blue-100"
        >
          {slot}
        </button>
      ))}
    </div>
  );
}