module.exports = function(req, res, done) {
  var self = this;

  self.parseChangeEmailRequest(req, res, function(err, email) {
    if (err) return done(err);

    self.changeEmail(req.session.userId, email, function(err) {
      if (err) return done(err);

      if (self.options.confirmChangeEmail) {
        self.sendChangeEmailConfirmation(req.session.userId, email, req, done);
      } else {
        done();
      }
    });
  });
};
