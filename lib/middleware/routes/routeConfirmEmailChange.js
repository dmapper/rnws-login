module.exports = function(req, res, done) {
  var self = this;
  var secret = req.body.secret;

  self.parseConfirmEmailRequest(req, res, function(err, userId) {
    if (err) return done(err);

    self.confirmSecret(userId, secret, function(err) {
      if (err) return done(err);

      self.confirmEmail(userId, function(err) {

        if(err) return done(err)

        self.login(userId, req, done);
      });
    });
  });
};
