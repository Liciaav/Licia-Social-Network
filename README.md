# Licia-Social-Network

## Description
This is a backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage their friend lists. It is built using Node.js, Express.js, and MongoDB with Mongoose ODM for database interaction. The API provides RESTful routes for managing users, thoughts, reactions, and friendships.

## Table of Contents
- Features
- Installation
- Usage
- Technologies Used
- Seed Data
- License

## Features
- Users:
    - Create, read, update, and delete users.
    - Manage a friend list and view the friend count.
- Thoughts:
    - Users can share thoughts and update or delete them.
    - Virtual property to count the number of reactions.
- Reactions:
    - Add or remove reactions to thoughts (like comments).
- Friendships:
    - Add or remove friends in the user's friend list.
- Database Virtuals and Methods:
    - Virtual properties to count friends and reactions.
    - Built-in validation for fields like email and usernames.

## Installation
- Clone the repository to your local machine:
    - git clone <git@github.com:Liciaav/Licia-Social-Network.git>
- Navigate to the project directory:
    - cd social-network-api
- Install dependencies:
    - npm install
- Create a .env file in the root of the project and define the following environment variables:
- Start the MongoDB server locally:
    - mongodb
- Run the application:
    - npm start

## Usage
- Use an API client like Insomnia to test the endpoints.
- Test CRUD operations for users, thoughts, reactions, and friendships.

## Technologies Used
- Node.js - JavaScript runtime environment for building scalable backend applications.
- Express.js - Web application framework for handling API routing.
- MongoDB - NoSQL database for storing application data.
- Mongoose - Object Data Modeling (ODM) library for MongoDB and Node.js.
- TypeScript - Strongly typed JavaScript for improved development experience.
- dotenv - Environment variable management.
- Insomnia - For API testing and debugging.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Future Enhancements
- Add pagination for users and thoughts.
- Implement advanced filtering for thoughts.
- Add user authentication and authorization.

## Contact
- For any issues or questions, please open a GitHub issue in the repository.