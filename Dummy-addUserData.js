//import { databases } from './appwrite.config'; // Importing the configured databases

const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('668c983e00031858db3b') // Your project ID
    .setKey('44ff5565291151052c48be9933de520d074ad626835a1ce2e974e59c7a03bf59031cea32c57ccf29908ee34013af376be28ae224361841e8d25cc424245d958b1ebfc89a2bfaf5f990dd93b7dc0b1cfdba18c70cc1cc3842ebd2762c3d898895243bd5d11f908e817bc10f1d1c484d45a36f39af4cce0c1803db3c391bf5b0b3'); // Your secret API key

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



import { ID } from 'node-appwrite';

// Function to add dummy user data
async function addUserData() {
    try {
        const user1 = await databases.createDocument(process.env.DATABASE_ID!, process.env.CONSUMER_COLLECTION_ID!, ID.unique(), {
            email: 'user1@example.com',
            phone: '1234567890',
            userId: 'user1',
            name: 'User One',
            address: '123 Street, City',
            city: 'Sample City',
            state: 'State',
            zipcode: '12345',
            createon: new Date().toISOString(),
            bookings: [],
            userType: 'Consumer',
            profileImg: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        });

        const user2 = await databases.createDocument(process.env.DATABASE_ID!, process.env.CONSUMER_COLLECTION_ID!, ID.unique(), {
            email: 'user2@example.com',
            phone: '0987654321',
            userId: 'user2',
            name: 'User Two',
            address: '456 Avenue, City',
            city: 'Another City',
            state: 'State',
            zipcode: '54321',
            createon: new Date().toISOString(),
            bookings: [],
            userType: 'ServiceProvider',
            profileImg: 'https://static.wikia.nocookie.net/simpsons-world/images/0/0b/Marge_Simpson.png/revision/latest?cb=20170825030930'
        });

        console.log('User data added successfully:', user1, user2);
    } catch (error) {
        console.error('Error adding user data:', error);
    }
}

addUserData();
