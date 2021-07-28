// const path = require('path')
// const fs = require('fs')
// const currentPath = path.resolve(__dirname, './data')
// const provincePath = path.resolve(__dirname, './data/province')
// const AllDir = fs.readdirSync(currentPath)
// const provinceDir = fs.readdirSync(provincePath)

// const geoJSON = require('./data/china.json')
// module.exports = () => {
//   let obj = {}
//   for (const path of provinceDir) {
//     obj[path.split('-')[0]] = require(provincePath + '/' + path)
//   }

//   let data = { data: geoJSON, ...obj }
//   return data
// }

// // console.log('currentPath', currentPath)
// // console.log('AllDir', AllDir)
// // console.log('provincePath', provincePath)
// // console.log('provinceDir', provinceDir)

// // const province = provinceDir.map(item => `${item.split('-')[0]}.json`)
// // const province = [...provinceDir]
// // const province = provinceDir.map(item => ({
// //   [item.split('-')[0]]: fs.readFileSync(provincePath + '/' + item, 'utf8')
// // }))
// // console.log('province', province)
// // let data = { geoJSON, province }
// // obj[path.split('-')[0]] = fs.readFileSync(provincePath + '/' + path, 'utf8')
