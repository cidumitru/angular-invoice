module.exports = {
  name: 'feature-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/products',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
