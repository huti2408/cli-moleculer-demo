"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "hello",
	actions: {
		world(ctx) {
			return "Hello World";
		},
	},
};
