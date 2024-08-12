const connection = require('../config/connection');
const { User, Event, CalendarEvent } = require('../models');
const removeData = require('./removeData');

const userData = require('./UserData.json');
const eventData = require('./EventData.json');

connection.once('open', async () => {

    console.log('--------------------------------');
    
    await removeData('Event', 'events');
  
    console.log('--------------------------------');
    console.log('Adding new data');
    
    const userResult = await User.insertMany(userData);
    const eventResult = await Event.insertMany(eventData);
    

  console.log('--------------------------------');
  console.log('Tandem Travel data seeded: User, Events, CalendarEvents');
  process.exit(0);
});
