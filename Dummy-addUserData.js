//import { databases } from './appwrite.config'; // Importing the configured databases

const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('668c983e00031858db3b') // Your project ID
    .setKey(); // Your secret API key

const users = new sdk.Users(client);

async function createUser() {
    try {
        const result = await users.create(
            'user1',
            'user1@example.com',
            '+12345678900',
            ';lsdafj1',
            'User One',
        );
        console.log('User created successfully:', result);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

createUser();

import { createUser } from '@services/dbOperations';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password, isServiceProvider } = req.body;
    const user = await createUser(username, email, password, isServiceProvider);
    res.status(201).json(user);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


// import { ID } from 'node-appwrite';

// // Function to add dummy user data
// async function addUserData() {
//     try {
//         const user1 = await databases.createDocument(process.env.DATABASE_ID!, process.env.CONSUMER_COLLECTION_ID!, ID.unique(), {
//             email: 'user1@example.com',
//             phone: '1234567890',
//             userId: 'user1',
//             name: 'User One',
//             address: '123 Street, City',
//             city: 'Sample City',
//             state: 'State',
//             zipcode: '12345',
//             createon: new Date().toISOString(),
//             bookings: [],
//             userType: 'Consumer',
//             profileImg: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//         });

//         const user2 = await databases.createDocument(process.env.DATABASE_ID!, process.env.CONSUMER_COLLECTION_ID!, ID.unique(), {
//             email: 'user2@example.com',
//             phone: '0987654321',
//             userId: 'user2',
//             name: 'User Two',
//             address: '456 Avenue, City',
//             city: 'Another City',
//             state: 'State',
//             zipcode: '54321',
//             createon: new Date().toISOString(),
//             bookings: [],
//             userType: 'ServiceProvider',
//             profileImg: 'https://static.wikia.nocookie.net/simpsons-world/images/0/0b/Marge_Simpson.png/revision/latest?cb=20170825030930'
//         });

//         console.log('User data added successfully:', user1, user2);
//     } catch (error) {
//         console.error('Error adding user data:', error);
//     }
// }

// addUserData();
