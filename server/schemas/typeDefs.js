
const typeDefs = `
scalar Date

type User {
    _id: ID
    firstName: String
    lastName: String
    profileImage: String
    username: String
    email: String
    password: String
    signupToken: String
    invited: Boolean
    accepted: Boolean
    declined: Boolean
    createdAt: String
    
    }

   type Auth {
    token: ID!
    user: User
  }
  type Event {
    _id: ID
    name: String
    description: String
    start: Date
    end: Date
    venue: String
    latitude: Float
    longitude: Float
    owner: [User]
    attendees: [User]
    createdAt: String
  }
 
  type CalendarEvent {
    _id: ID
    name: String
    description: String
    start: Date
    end: Date
    owner: [User]
    event: [Event]
    createdAt: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    events: [Event]
    event(eventId: ID!): Event
    calendarEvents: [CalendarEvent]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addEvent(
      name: String,
      description: String,
      start: String,
      end: String,
      venue: String,
      latitude: Float,
      longitude: Float
      ): Event

    editEvent(
      _id: String,
      name: String,
      description: String,
      start: String,
      end: String,
      venue: String,
      latitude: Float,
      longitude: Float
      ): Event

    deleteEvent(id: ID!): String
}    
   `;

module.exports = typeDefs;
