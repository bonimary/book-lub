'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Дедектив',
        },
        {
          name: 'Классика',
        },
        {
          name: 'Психология',
        },
        {
          name: 'Компьютеры',
        },
        {
          name: 'Фэнтези',
        },
        {
          name: 'Зарубежная литература',
        },
        {
          name: 'История',
        },
        {
          name: 'Публицистика',
        },
        {
          name: 'Современная проза',
        },
        {
          name: 'Фантастика',
        },
        {
          name: 'Приключения',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
