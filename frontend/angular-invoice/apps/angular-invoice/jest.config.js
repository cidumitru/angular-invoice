module.exports = {
  name: 'angular-invoice',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-invoice',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
