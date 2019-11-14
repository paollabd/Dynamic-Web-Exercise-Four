const express = require('express');
const router = express.Router();
const firebase = require('firebase');

var firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY ,
	authDomain: "pbd244-exercise-four.firebaseapp.com",
	databaseURL: "https://pbd244-exercise-four.firebaseio.com",
	projectId: "pbd244-exercise-four",
};

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const bd = firestoreDatabase.firestore();

let posts = [];
bd.collection('blog-posts').get()
	.then(
		blogPosts => {
			blogPosts.forEach(post => { // returns the JSON file so we can dsiplay it on the web page
				posts.push(post.data());
			})
			console.log('blogPosts', blogPosts);
		}
	)
	.catch(err => {
			console.log('error', err) 
	})

router.get('/', (req, res) => {
	res.send(posts);
})

module.exports = router;

// const admin = require("firebase-admin");
// const express = require('express');
// const router = express.Router();

// let serviceAccount = require("../pbd244-exercise-four-firebase-adminsdk-wr2na-15a359424d.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// let db = admin.firestore();


// router.get('/', (req, res) => (
// 	res.send(db.collection('blog-posts').get()
// 	  .then((snapshot) => {
// 	    snapshot.forEach((doc) => {
// 	      console.log(doc.id, '=>', doc.data());
// 	    });
// 	  })
// 	  .catch((err) => {
// 	    console.log('Error getting documents', err);
// 	  })

// )));

// module.exports = router; // exporting the router