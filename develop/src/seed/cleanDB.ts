import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';

const cleanDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await db();

    console.log('Clearing collections...');
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('Collections cleared successfully!');

    process.exit(0);
  } catch (err) {
    console.error('Error clearing database:', err);
    process.exit(1);
  }
};

export default cleanDatabase;
