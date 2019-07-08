const express = require('express'),
  router = express.Router(),
  RoutinesModel = require('../models/m_routines');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const getRoutine = await RoutinesModel.getRoutine(1);


  console.log(getRoutine);
  res.render('index', {
    locals: {
      title: 'Routines',
      routines: getRoutine
    },
    partials: {
      partial: 'partial-routines'
    }
  });
});

module.exports = router;
