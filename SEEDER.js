'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: 'Aleksandar',
          lastName: 'Dordevic',
          email: 'testerone@test.com',
          hashedPassword: bcrypt.hashSync('password123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Tester',
          lastName: 'One',
          email: 'testertwo@test.com',
          hashedPassword: bcrypt.hashSync('password1234', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Visitor',
          lastName: 'Demo',
          email: 'demo@dftm.com',
          hashedPassword: bcrypt.hashSync('demo123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
    const homes = await queryInterface.bulkInsert(
      "Homes",
      [
        {
          name: 'Mira Beach House',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.158542,
          lng: 25.794824,
          price: 1000,
          description: 'Beatufull beach front Villa',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Despot Villa',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.154295,
          lng: 25.793312,
          price: 1200,
          description: 'Beatufull beach front',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.141007,
          lng: 25.773452,
          price: 1500,
          description: 'Beatufull beach front Villa',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa 2',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.142788,
          lng: 25.781623,
          price: 1000,
          description: 'Beatufull beach front Villa 2',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse',

          city: 'New York',
          state: 'New York',
          lat: -74.003778,
          lng: 40.749669,
          price: 1000,
          description: 'Luxurious penthouse',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse 2',
          city: 'New York',
          state: 'New York',
          lat: -74.002748,
          lng: 40.747328,
          price: 1000,
          description: 'Luxurious penthouse 2',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse 3',
          city: 'New York',
          state: 'New York',
          lat: -74.000184,
          lng: 40.750799,
          price: 1000,
          description: 'Luxurious penthouse 3',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Manhaten Penthouse',
          city: 'New York',
          state: 'New York',
          lat: -73.983876,
          lng: 40.739651,
          price: 3000,
          description: 'Luxurious penthouse 4',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    return await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          title: 'review 1',
          description: 'nice place',
          rating: 4,
          userId: 1,
          homeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 2',
          description: 'nice place',
          rating: 4,
          userId: 1,
          homeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 3',
          description: 'nice place',
          rating: 4,
          userId: 2,
          homeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 4',
          description: 'nice place',
          rating: 4,
          userId: 2,
          homeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 5',
          description: 'nice place',
          rating: 4,
          userId: 2,
          homeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 6',
          description: 'nice place',
          rating: 3,
          userId: 2,
          homeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Homes', null, {});
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
