import db from '../config/connection.js';
import cleanDB from './cleanDB.js';
import { User, Thought } from '../models/index.js';
import { getRandomUsers, getRandomThoughts } from './data.js';

const seedDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await db();

    console.log('Clearing old data...');
    await cleanDB();

    // Create random users
    const users = getRandomUsers(10); // Generate 10 users
    const createdUsers = await User.create(users);

    console.log('Users seeded:', createdUsers);

    // Create random thoughts
    const usernames = createdUsers.map((user) => user.username);
    const thoughts = getRandomThoughts(usernames, 20); // Generate 20 thoughts

    const createdThoughts = await Thought.create(thoughts);

    // Link thoughts to users
    for (const thought of createdThoughts) {
      await User.findOneAndUpdate(
        { username: thought.username },
        { $push: { thoughts: thought._id } }
      );
    }

    console.log('Thoughts seeded:', createdThoughts);
    console.log('Database seeding complete! 🌱');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();
