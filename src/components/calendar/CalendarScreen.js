import React, { useState } from "react";
import { Navbar } from "../ui/Navbar";

import { messages } from "../../helpers/calendar-messages-es";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
moment.locale("es");
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );



  const events = [
    {
      title: "cumpleaños del jefe",
      start: moment().toDate(),
      end: moment().add(3, "hours").toDate(),
      bgcolor: "fafafa",
      notes:"comprar el pastel",
      user:{
        _id:"123",
        name:"natali"
      }


    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
    </div>
  );
};
