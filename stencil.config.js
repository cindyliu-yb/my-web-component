exports.config = {
  namespace: 'forminputbase',
  generateDistribution: true,
  bundles: [
    { components: ['form-input-base'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
