'use strict';

const createFileTree = require('./lib/createFileTree');

module.exports = (filePath, noCache) => createFileTree(filePath, noCache);
