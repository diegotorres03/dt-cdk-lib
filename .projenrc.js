const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Diego Torres',
  authorAddress: 'diegotorre0303s@gmail.com',
  cdkVersion: '2.38.1',
  defaultReleaseBranch: 'main',
  name: 'dt-cdk-lib',
  repositoryUrl: 'https://github.com/diegotorre0303s/22-dt-cdk-lib.git',
  keywords: ['aws', 'cdk'],
  description: 'set of reusable cdk constructs to make comon tasks easier',


  majorVersion: 1,

  publishToPypi: {
    distName: 'dt-cdk-lib',
    module: 'cdk-constructs',
  },

  gitignore: [
    'playground',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();