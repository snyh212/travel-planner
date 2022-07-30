const router = require('express').Router();
const locationsRoutes = require('./locationsRoutes');
const travelersRoutes = require('./travelersRoutes');
const tripsRoutes = require('./tripsRoutes');


router.use('/locationsRoutes', locationsRoutes);
router.use('/travelersRoutes', travelersRoutes);
router.use('/tripsRoutes',tripsRoutes);

module.exports = router;