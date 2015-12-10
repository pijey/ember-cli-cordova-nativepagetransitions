import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("index", {path: "/"});
  this.route("about", {path: "/about"});
  this.route("page-1", {path: "/page-1"});
  this.route("page-2", {path: "/page-2"});
  this.route("page-3", {path: "/page-3"});
});

export default Router;
