
App = Ember.Application.create();


Ember.Handlebars.registerBoundHelper('date', function(date) {
	if (date) {
		return date.toDateString();
	}
	return "";
});