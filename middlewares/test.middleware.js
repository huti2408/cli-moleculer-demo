const middleware = {
	name: "CheckLength",
	localAction(next, action) {
		return function (ctx) {
			console.log(ctx);
			return next(ctx)
				.then((res) => {
					return res;
				})
				.catch((err) => {
					console.log(err);
				});
		};
	},
};
exports.module = middleware;
