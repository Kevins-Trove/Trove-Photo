const { Schema, model } = require('mongoose');


const photoSchema = new Schema(
  {
    upload: {
        type: Date,
        default: Date.now,
    },
    taken: {
        type: Date,
        default: Date.now,
    },
    width: {
        type: Number,
        default: 0,
    },
    height: {
        type: Number,
        default: 0,
    },
    caption: {
        type: String,
    },
    owner: [ {
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

const Photo = model('Photo', photoSchema);

module.exports = Photo;
