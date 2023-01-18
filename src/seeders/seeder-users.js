'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '1234',
      phonenumber:'0987654321',
      firstName: 'danDev',
      lastName: 'quana',
      address: 'USA',
      gender: 1,

      // keyRole: 'R1',

      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
  },

  down: async  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
