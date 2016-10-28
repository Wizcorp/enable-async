'use strict';

const version = process.versions.v8.match(/^([0-9]+)\.([0-9]+)\./);
const major = parseInt(version[1], 10);
const minor = parseInt(version[2], 10);

if (major < 5 || (major === 5 && minor < 4)) {
	// not supported
	throw new Error('async/await is not supported in V8 versions before 5.4');
}

if (major > 5 || (major === 5 && minor > 4)) {
	// enabled by default
	return;
}

const v8 = require('v8');
v8.setFlagsFromString('--harmony_async_await');

