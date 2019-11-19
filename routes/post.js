// getting a single post

const express = require('express');
const router = express.Router();
const firebase = require('firebase');

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

router.get("/:id", (req, res) => {
	let queryID = req.params.id;
	let docRef = db.collection("blog-posts").doc(queryId);
	docRef
	.get()
	.then(doc => res.send(doc.data()))
	.catch(error => res.send(error));
})

module.exports = router;