const { types } = require('./changelog.config');

/** @type import('conventional-changelog-config-spec').Config */
module.exports = {
	types: Object.entries(types).map(([key, each]) => {
		return {
			hidden: each.hidden,
			section: each.section,
			type: key,
		};
	}),
};
