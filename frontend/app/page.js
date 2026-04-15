"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./components/EventCard";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events")
      .then(res => setEvents(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Schedule a Meeting
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map(e => (
          <EventCard key={e._id} event={e} />
        ))}
      </div>
    </div>
  );
}