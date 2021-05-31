'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'test'
  }
  async find() {
    const ctx = this.ctx
    const id = ctx.query.id
    console.log('userId', id)
    const user = await this.app.mysql.get('antos', { id })
    console.log('user', user)
    ctx.body = user
  }
}

module.exports = HomeController
