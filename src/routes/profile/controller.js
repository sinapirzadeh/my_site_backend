const controller = require("./../controller");

module.exports = new (class extends controller {
  async login(req, res) {
    let user = this.User.findOne({ email: res.body.email });
    if (user) {
      
    }
  }
})();
