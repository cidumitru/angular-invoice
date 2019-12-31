module.exports = {
  name: 'feature-invoices',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/feature/invoices',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
