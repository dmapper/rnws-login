module.exports = function(req, res, done) {
  var self = this;

  self.parseConfirmEmailRequest(req, res, function(err, userId, secret) {
    if (err) return done(err);

    self.confirmEmail(userId, function(err) {
      if (err) return done(err);

      self.login(userId, req, done);
    }, secret);
  });
};
