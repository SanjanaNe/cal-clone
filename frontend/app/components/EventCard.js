export default function EventCard({ event }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-500">{event.description}</p>

      <a
        href={`/booking/${event.slug}`}
        className="mt-3 inline-block text-blue-600 font-medium"
      >
        Book Now →
      </a>
    </div>
  );
}