"use strict";
const jwt = require("jsonwebtoken");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "auth",
	actions: {
		login: {
			cache: true,
			async handler(ctx) {
				const { username, password } = ctx.params;
				if (username && password) {
					const token = jwt.sign({ username }, process.env.SECRETKEY);
					return { token };
				}
			},
		},
	},
};
