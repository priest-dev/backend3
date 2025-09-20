// src/server.js
import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/adoptme';

async function start() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Mongo conectado');
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (err) {
    console.error('Error iniciando app:', err);
    process.exit(1);
  }
}

start();
