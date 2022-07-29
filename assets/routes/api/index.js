const router = require('express').Router();
const locationsRoutes = require('./locations');
const travellersRoutes = require('./travellers');
const tripsRoutes = require('./trips');


router.use('/locations', locationsRoutes);
router.use('/travellers', travellersRoutes);
router.use('/trips',tripsRoutes);

module.exports = router;