const router = require('express').Router();
const locationsRoutes = require('./locationsRoutes');
const travellersRoutes = require('./travellersRoutes');
const tripsRoutes = require('./tripsRoutes');


router.use('/locations', locationsRoutes);
router.use('/travellers', travellersRoutes);
router.use('/trips',tripsRoutes);

module.exports = router;