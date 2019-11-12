const path = require('path')
const fs = require('fs')
const version = require('./package.json').version

module.exports = class ExtractVersionWebpackPlugin {

  constructor(opts) {
    this.filename = opts.filename;
  }

  apply(compiler) {
    let fileContent = Object.keys(process.env)
      .filter(k => k.startsWith('ENVERYWHERE_'))
      .reduce((accum, currKey) => {
        const val = process.env[currKey]
        accum += `const ${currKey} = '${val}'\n`
        return accum
      }, '')

    if(version)
      fileContent += `const VERSION = '${version}'\n`;

    const outputDir = compiler.options.output.path

    //if syncing doesn't exist, make it.
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }
    const fullOutputPath = path.join(outputDir, this.filename)

    //Write to env variable to the file to be used.
    fs.writeFileSync(fullOutputPath, fileContent)
  }
}
