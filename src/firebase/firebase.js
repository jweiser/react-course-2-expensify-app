import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/*
database.ref('expenses')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

database.ref('expenses').push({
    description: 'Rent',
    note: 'Good rent',
    amount: '19500',
    createdAt: 0
});



// database.ref('notes/-LLeGu2BHT9lBjQlIYxJ').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     const name = data.name;
//     const title = data.job.title;
//     const company = data.job.company;

//     console.log(`${name} is a ${title} at ${company}.`);
// });

// database.ref().update({
//     name: 'John Smith',
//     'job/title': 'Teacher',
//     'job/company': 'Seneca College'
// });


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Joel Weiser',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'United States'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Successfully removed isSingle');
//     })
//     .catch((error) => {
//         console.log('Removing isSingle failed', error);
//     });
*/