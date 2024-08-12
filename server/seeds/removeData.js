// Declarations

//const connection = require('../config/connection');
const { User, Event, CalendarEvent } = require('../models');


// Clear model of data
module.exports = async () => {
  
    console.log('Removing old data');

     // Clear existing records
    const userResult = await User.deleteMany({});
    console.log('Deleted user count:', userResult.deletedCount);

    const eventResult = await Event.deleteMany({});
    console.log('Deleted event count:', eventResult.deletedCount);

    const calendarEventResult = await CalendarEvent.deleteMany({});
    console.log('Deleted calendarEvent count:', calendarEventResult.deletedCount);

    
}
