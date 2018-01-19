// models/game.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const squaresSchema = new Schema({
  position: { type: Number, required: true },
  won: { type: Boolean, default: false },
});

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  symbol: { type: String, required: true },
  squares: [squaresSchema]
});

const gameSchema = new Schema({
  squares: [squaresSchema],
  players: [playerSchema],
  turn: { type: Number, default: 0 }, // player index
  started: { type: Boolean, default: false },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  draw: { type: Boolean, default: false },
});

module.exports = mongoose.model('games', gameSchema)
