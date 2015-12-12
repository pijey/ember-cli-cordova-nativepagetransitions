import Ember from 'ember';

export default Ember.Object.extend(Ember.Evented, {
  cordovaEvents: ['backbutton'],

  init: function() {
    document.addEventListener("deviceready", Ember.run.bind(this, this.setupEventListeners), false);
  },

  setupEventListeners: function() {
    var proxy = this;
    proxy.get('cordovaEvents').forEach(function(eventName) {
      document.addEventListener(eventName, Ember.run.bind(proxy, proxy.handleEventListener), false);
    });
  },

  handleEventListener: function(event) {
    this.trigger(event.type, event);
    return true;
  }
});