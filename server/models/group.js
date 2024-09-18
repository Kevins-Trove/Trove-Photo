const { Schema, model } = require('mongoose');


const groupSchema = new Schema(
  {
    title: {
        type: String,
    },
    descriptin: {
        type: String,
    },
    owner: [ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },],
    expiration: {
        type: Date,
        default: Date.now
    },
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




const Group = model('Group', groupSchema);

module.exports = Group;
