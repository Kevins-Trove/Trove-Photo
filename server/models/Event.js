const { Schema, model } = require('mongoose');


const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        default: "",
    },
    start: {
        type: Date,
        required: true,
        default: Date.now,
    },
    end: {
        type: Date,
        required: true,
        default: Date.now,
    },
    venue: {
        type: String,
        default: "",
    },
    latitude: {
        type: Number,
        default: 0,
    },
    longitude: {
        type: Number,
        default: 0,
    },
    owner: [ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },],
    attendees:[ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },],
    createdAt: {
        type: Date,
        default: Date.now
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);




const Event = model('Event', eventSchema);

module.exports = Event;
