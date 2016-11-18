var fs = require('fs'),
	path = require('path'),
	srcdir = path.join(__dirname, 'src');

fs.readdirSync(srcdir).filter(function(n) {
	return n.endsWith('.proto');
}).map(function(n) {
	var name = path.basename(n).replace('.proto', '');
	var proper = name.charAt(0).toUpperCase() + name.substring(1);
	var camelCased = proper.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
	function getter() {
		var o = require(path.join(srcdir, name + '_pb.js'));
		return o[proper];
	}
	Object.defineProperty(exports, camelCased, {
		get: getter,
		enumerable: true,
		configurable: true
	});
});
