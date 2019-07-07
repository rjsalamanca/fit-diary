const express = require('express'),
  router = express.Router(),
  RoutinesModel = require('../models/m_routines');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const routineInstance = new RoutinesModel(1, null, null);
  const getRoutine = await routineInstance.getRoutine();


  console.log(getRoutine);
  res.render('index', {
    locals: {
      title: 'Routines'
    },
    partials: {
      partial: 'partial-routines'
    }
  });
});

module.exports = router;
