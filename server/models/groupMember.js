const { Schema, model } = require('mongoose');


const groupMemberSchema = new Schema(
  {
    title: {
        type: String,
    },
    invitedBy: [ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },],
    user: [ {
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




const GroupMember = model('GroupMember', groupMemberSchema);

module.exports = GroupMember;
