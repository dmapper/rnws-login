module.exports = function(userId, secretCode, done) {
  var self = this;

  if(self.options.confirmChangeEmail) {
    return done()
  }

  var model = self.backend.createModel();

  // Look for user with given userId
  var $user = model.at(self.options.collection + '.' + userId);
  model.fetch($user, function(err) {
    var userSecret = $user.get(self.options.localField + '.' + self.options.emailChangeField + '.' + self.options.secretField)
    if(userSecret !== secretCode) {
      return done(self.error('wrongSecret'));
    }
    done()
  });
}
