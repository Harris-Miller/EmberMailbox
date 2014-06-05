App.Mailbox = Ember.Object.extend();

App.Mailbox.reopenClass({
	find: function(id) {
		if (id) {
			return App.FIXTURES.findBy('id', id);
		}
		return App.FIXTURES;
	}
});