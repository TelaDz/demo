'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/test', controller.test.index)
  router.get('/test/find', controller.test.find)
  router.get('/user', controller.user.info)
}
