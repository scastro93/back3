"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Users", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				isUnique: true,
				allowNull: false,
				// validate: {
				// 	isEmail: true,
				// },
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					len: {
						args: 3,
					},
				},
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Users");
	},
};
