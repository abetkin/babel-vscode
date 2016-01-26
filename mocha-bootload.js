
require('babel/register')({
  optional: ['runtime', 'es7.asyncFunctions'],
  sourceMaps: "inline",
  // sourceRoot: "test",
  // sourceMapTarget: "mm"
});

var chai = require('chai');


process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
