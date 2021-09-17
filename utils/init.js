
const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `umbraco-cli`,
		tagLine: `unicorns and rainbow`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#3544b1',
		color: '#ffffff',
		bold: true,
		clear
	});
};
