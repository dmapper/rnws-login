module.exports = function(req, res, done) {
  var self = this;
  var secretCode = req.body.secret;

  self.parseConfirmEmailRequest(req, res, function(err, userId) {
    if (err) return done(err);

    self.secretMatch(userId, secretCode, function(err) {
      if (err) return done(err);

      self.confirmEmail(userId, function(err) {

        if(err) return done(err)

        self.login(userId, req, done);
      });
    });
  });
};
