const multer = require('koa-multer')
const path = require('path')

let storage = multer.diskStorage({
  destination: path.resolve('upload'),
  filename: (ctx, file, cb) => {
    cb(null, file.originalname)
  }
})
let fileFilter = (ctx, file, cb) => {
  //过滤上传的后缀为txt的文件
  if (file.originalname.split('.').splice(-1) == 'txt') {
    cb(null, false)
  } else {
    cb(null, true)
  }
}
let upload = multer({
  storage,
  fileFilter
})
// let router = new Router()
// router.post('/upload', upload.single('file'), async ctx => {
//   if (ctx.req.file) {
//     ctx.body = 'upload success'
//   } else {
//     ctx.body = 'upload error'
//   }
// })
