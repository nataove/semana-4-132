'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Articulos',
        'imagen',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Articulos', 'imagen'),
    ]);
  }
};