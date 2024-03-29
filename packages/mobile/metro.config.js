/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
module.exports = {
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'],
    blacklistRE: new RegExp(
      `^((?!${reactNativeFolder.replace(
        '/',
        '\\/',
      )}).)*\\/node_modules\\/react-native\\/.*$`,
    )
  },
};
