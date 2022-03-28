const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");
require("dotenv").config();

module.exports = {
	name: "categories",
	mixins: [DbService],
	adapter: new SqlAdapter(process.env.MySQL_URI),
	model: {
		name: "category",
		define: {
			title: Sequelize.STRING,
			slug: Sequelize.STRING,
			content: Sequelize.STRING,
		},
	},
};
