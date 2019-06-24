module.exports = function(userId, inputSecret, done) {
	var self = this;
	var model = self.backend.createModel();

	// Look for user with given userId
	var $user = model.at(self.options.collection + '.' + userId);
	model.fetch($user, function(err) {

		if (self.options.confirmEmail) {
			var secret = $user.get(self.options.localField + '.' + self.options.emailChangeField + '.' + self.options.secretField)
			if(secret !== inputSecret) {
				return done(self.error('wrongSecret'));
			}
		}
		done()
	});
}
