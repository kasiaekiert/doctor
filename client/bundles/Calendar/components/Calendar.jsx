import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2020, 3, 0),
    end: new Date(2020, 3, 1),
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2020, 3, 7),
    end: new Date(2020, 3, 10),
  },
];

export const MyCalendar = (props) => {
  console.log(props);
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor='start'
        endAccessor='end'
        style={{ height: "100vh" }}
      />
    </div>
  );
};
