import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

export default mongoose.connection;

