module.exports = function(req, res, done) {
  var userId = req.query.id;
  var secret = req.body.secret

  if (!userId) return done('Missing id');

  done(null, userId, secret);
};
