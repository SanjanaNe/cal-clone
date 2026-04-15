"use client";
import Calendar from "react-calendar";

export default function CalendarBox({ date, setDate }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}