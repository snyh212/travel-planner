const sequelize = require('../config/connection');
const { Traveler, Location, Trip } = require('../models');

const travelerSeedData = require('./travellerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travelers = await Traveler.bulkCreate(travelerSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  // Create trips at random
  for (let i = 0; i < 10; i++) {
    // Get a random traveller's `id`
    const { id: randomTravelerId } = travelers[
      Math.floor(Math.random() * travelers.length)
    ];

    // Get a random location's `id`
    const { id: randomLocationId } = locations[
      Math.floor(Math.random() * locations.length)
    ];

    // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
    await Trip.create({
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveler_amount: Math.floor(Math.random() * 10) + 1,
      traveler_id: randomTravelerId,
      location_id: randomLocationId,
    }).catch((err) => {
      // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();
