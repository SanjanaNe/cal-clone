"use client";
import { useState } from "react";
import CalendarBox from "@/app/components/CalendarBox";
import TimeSlots from "@/app/components/TimeSlots";
import BookingForm from "@/app/components/BookingForm";
import axios from "axios";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/bookings", {
      name,
      email,
      date: date.toDateString(),
      time,
      eventId: "PUT_EVENT_ID"
    });

    window.location.href = "/confirm";
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">

      <div>
        <h2 className="text-2xl font-bold">Event Details</h2>
        <p>30 min meeting</p>
      </div>

      <CalendarBox date={date} setDate={setDate} />

      <div>
        <TimeSlots setTime={setTime} />
        <BookingForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit}
        />
      </div>

    </div>
  );
}