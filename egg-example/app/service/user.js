const Service = require('egg').Service

class UserService extends Service {
  async find(id) {
    const user = await this.app.mysql.get('antos', { id })
    // console.log('user', user);
    return { user }
  }
}

module.exports = UserService
