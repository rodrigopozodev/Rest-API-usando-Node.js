const { Router } = require('express');
const router = Router();

import('node-fetch').then(fetch => {
   // Aquí puedes usar la variable 'fetch'
 });

router.get('/', async (req, res) => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await response.json();
   res.json(users);
});

module.exports = router;