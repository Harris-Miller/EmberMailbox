App.Router.map(function() {
	this.resource('mailbox', { path: '/:mailbox_id' }, function() {
		this.resource('mail', { path: '/:message_id' });
	});
});

App.ApplicationRoute = Em.Route.extend({
	model: function() {
		return App.Mailbox.find();
	}
});

App.MailboxRoute = Ember.Route.extend({
	model: function(params) {
		return App.Mailbox.find(params.mailbox_id);
	}
});

App.MailRoute = Em.Route.extend({
	model: function(params) {
		// id field is of type int, need to normalize params.message_id
		params.message_id = parseInt(params.message_id, 10);
		return this.modelFor('mailbox').messages.findBy('id', params.message_id);
	}
});
