const { Schema, model } = require('mongoose');

const messageSchema = new mongoose.Schema({
    user: String,
    content: String,
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });

  const Event = model('Message', messageSchema);

module.exports = Message;