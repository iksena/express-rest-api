const { Router } = require('express');

const router = Router();

router.get('/users/:id/places', (req, res, next) => {
  const { path } = req;
});

module.exports = router;
