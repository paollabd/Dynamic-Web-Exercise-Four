const express = require('express');
const router = express.Router();

router.get('/', (req, res) => (
	res.send('About The API')
));
router.get('/me', (req, res) => (res.send('About Me')));

module.exports = router; // exporting the router