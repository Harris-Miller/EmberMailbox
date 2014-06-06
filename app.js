App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();


Ember.Handlebars.registerBoundHelper('date', function(date) {
	if (date) {
		return date.toDateString();
	}
	return "";
});