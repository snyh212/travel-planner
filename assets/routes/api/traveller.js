const router = require('express').Router();
const {  } = require('../../models');

router.get('/travellers', async (req, res) => {
    try {
      const travellersData = await travellers.findAll({
        include: [{ model: Travellers }],
      });
      res.status(200).json(travellersData);
    } catch (err) {
      res.status(500).json(err);
    }
  });