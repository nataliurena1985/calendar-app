import React from "react";
import { Navbar } from "../ui/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {






const events=[{
  title:"cumpleaños del jefe",
  start:moment().toDate(),
  end:moment().add(2,"hours").toDate(),
  bgcolor:"fafafa"
}]



  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
