module.exports = {
  name: 'feature-clients',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/clients',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
