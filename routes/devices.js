const express = require('express');
const router = express.Router();
const devices = require('../services/devices');

router.get('/ondemand', devices.getAvailableOnDemandDevices);
router.post('/ondemand', devices.createOnDemandDevice);
router.get('/prebook', devices.getAvailablePreBookDevices);
router.post('/prebook', devices.createPreBookDevice);

module.exports = router;