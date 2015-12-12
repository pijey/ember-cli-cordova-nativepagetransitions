import Ember from 'ember';
import TransitionToListenerMixin from '../../../mixins/transition-to-listener';
import { module, test } from 'qunit';

module('Unit | Mixin | transition to listener');

// Replace this with your real tests.
test('it works', function(assert) {
  let TransitionToListenerObject = Ember.Object.extend(TransitionToListenerMixin);
  let subject = TransitionToListenerObject.create();
  assert.ok(subject);
});
