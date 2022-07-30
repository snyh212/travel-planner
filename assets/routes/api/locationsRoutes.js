const router = require('express').Router();
const { Travellers, Trips, Locations } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const locationsData = await Locations.findAll();
      const locations = locationData.map((location) => location.get({ plain: true }));
      console.log("locations", locations);

      res.status(200).json(locationsData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const locationsData = await Locations.findByPk(req.params.id, {
      include: [{ model: Travellers, through: Trips, as: 'location_travellers' }],
    });

    if(!locationsData) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }

    res.status(200).json(locationsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const locationsData = await Locations.create(req.body);
      res.status(200).json(locationsData);
    } catch (err) {
      res.status(400).json(err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const locationsData = await Locations.destroy({
        where: {
            id: req.params.id,
        },
        });

        if(!locationsData) {
        res.status(404).json({ message: 'No location found with that id!' });
        return;
        }

        res.status(200).json(locationsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;