'use strict';
// stationRoute
const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');
const passport = require("../utils/pass");


router.get('/', stationController.station_list_get);

router.get('/:id', stationController.station_get);

router.post('/', stationController.station_post);

router.put('/', stationController.station_put);


module.exports = router;
