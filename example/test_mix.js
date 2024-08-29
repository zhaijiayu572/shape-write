const fs = require('fs')
const path = require('path')
const zip = require('../src/zip')

const json = fs.readFileSync(path.join(__dirname, '111.json'))

zip(JSON.parse(json), {
  outputType: 'nodebuffer',
  prj: 'GEOGCS["China Geodetic Coordinate System 2000",DATUM["China_2000",SPHEROID["CGCS2000",6378137,298.257222101,AUTHORITY["EPSG","1024"]],AUTHORITY["EPSG","1043"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4490"]]',
  encoding: 'utf-8',
}).then((zipblob) => {
  fs.writeFileSync('./test.zip', zipblob)
})
