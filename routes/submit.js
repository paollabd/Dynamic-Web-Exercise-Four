// File: /routes/submit.js

const express = require('express');
const router = express.Router();
const firebase = require('firebase');

// firebase config
var firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY ,
	authDomain: "pbd244-exercise-four.firebaseapp.com",
	databaseURL: "https://pbd244-exercise-four.firebaseio.com",
	projectId: "pbd244-exercise-four",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// set sample data to submit upon request
const sampleData = {
	title: 'Test',
	text: 'Test Text',
	author: 'Paolla Dutra'
}

// test route
router.get('/test', (req, res) => {
	db.collection('blog-posts')
	  // setting and ID for the test doc
	  .doc('test-doc')
	  .set(sampleData)
	  .then(function() {
		  res.send("Document successfully written!");
	  })
	  .catch(function(error) {
		  res.send("Error writing document: ", error);
	});
})

// submit data
router.get('/', (req, res) => {
	// localhost:4000/submit?title=title&text=text&author=authornamewhatever
	let titleVal = req.query.title ? req.query.title : '';
	let textVal = req.query.text ? req.query.text : '';
	let authorVal = req.query.author ? req.query.author : '';
	db.collection('blog-posts')
	.add({ // getting URL parameters
		title: titleVal,
		text: textVal,
		author: authorVal
	})
	.then(ref => res.send(ref))
	.catch(e => res.send(e));
})

module.exports = router;



















