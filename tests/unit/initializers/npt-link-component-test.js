import Ember from 'ember';
import NptLinkComponentInitializer from '../../../initializers/npt-link-component';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | npt link component', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  NptLinkComponentInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
