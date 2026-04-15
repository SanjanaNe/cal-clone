"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/bookings")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>

      {bookings.map(b => (
        <div key={b._id} className="bg-white p-4 mb-2 shadow rounded">
          {b.name} - {b.date} - {b.time}
        </div>
      ))}
    </div>
  );
}