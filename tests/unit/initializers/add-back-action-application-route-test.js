import Ember from 'ember';
import AddBackActionApplicationRouteInitializer from '../../../initializers/add-back-action-application-route';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | add back action application route', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AddBackActionApplicationRouteInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
