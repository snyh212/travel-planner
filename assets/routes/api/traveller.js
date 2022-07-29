const router = require('express').Router();
const { Travellers, Trips, Locations } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const travellersData = await Travellers.findAll({
      });
      res.status(200).json(travellersData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const travellersData = await Travellers.findByPk(req.params.id, {
      include: [{ model: Locations, through: Trips, as: 'planned_trips' }],
    });

    if(!travellersData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(travellersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const travellersData = await Travellers.create(req.body);
      res.status(200).json(travellersData);
    } catch (err) {
      res.status(400).json(err);
    }
});


router.delete('/id', async (req, res) => {
    try {
        const travellersData = await Travellers.destroy({
        where: {
            id: req.params.id,
        },
        });

        if(!travellersData) {
        res.status(404).json({ message: 'No traveller found with that id!' });
        return;
        }

        res.status(200).json(travellersData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;