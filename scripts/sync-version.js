const fs = require('fs-extra');
const path = require('path');

const PKG_VERSION = process.env.npm_package_version;
const packages = ['common', 'muruca'];

const pkgUpdate$ = packages.map((pkg) => {
  const pkgPath = path.join(path.dirname(fs.realpathSync(__filename)), `../projects/${pkg}/package.json`);
  const pkgFile = require(pkgPath);

  // update version
  pkgFile.version = PKG_VERSION;
  return fs.writeJson(pkgPath, pkgFile, {
    spaces: 2
  });
})

Promise.all(pkgUpdate$)
  .then(() => {
    console.log(`${packages.join(', ')} packages version updated to ${PKG_VERSION}`);
  })
  .catch((err) => {
    console.log(`${packages.join(', ')} packages version update error`, err);
  })