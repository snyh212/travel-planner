const router = require('express').Router();
const { Travellers } = require('../../models');

router.get('/travellers', async (req, res) => {
    try {
      const travellersData = await Travellers.findAll({
        include: [{ model: Travellers }],
      });
      res.status(200).json(travellersData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/travellers', async (req, res) => {
    try {
      const travellersData = await Travellers.create({
        id: req.body.id,
      });
      res.status(200).json(travellersData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get('/travellers/:id', async (req, res) => {
    try {
      const travellersData = await Travellers.findByPk(req.params.id, {
        include: [{ model: Travellers }],
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

router.delete('/travellers/:id', async (req, res) => {
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