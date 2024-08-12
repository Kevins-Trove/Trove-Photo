import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import {useState} from 'react'
import "./calendarrender.css"


export default function DemoApp() {

  const [events, setEvents] = useState([
    { title: 'Meeting', start: new Date() },
    {title: "Meeting2", start: "2024-07-11T10:00:00", end: "2024-07-14T24:00:00"}
  ])

  const handleDateClick =(arg) =>{
    const titleprompt = prompt("Enter event information")

    const enddate = prompt("Enter end date DD/MM/YYYY")
    const eventEnd = enddate.split('/').reverse().join('-')

//YYYY-MM-DD
//eventend + "T" + timeend
    if (titleprompt){
      setEvents([...events, {title: titleprompt, start: arg.dateStr, end: eventEnd}])
    }
  }
  const handleEventClick = (info) => {
    if (window.confirm(`Delete ${info.event.title}?`))
      info.event.remove()
  }


  return (
    <div className= "calendarcontent">

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        editable={true}
        events={events}
        selectable={true}
        // eventContent={renderEventContent}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}