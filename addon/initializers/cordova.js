import CordovaEventProxy from "../utils/cordova-event-proxy";

export function initialize(container, application) {
    var proxy = CordovaEventProxy.create({});
    application.register('proxy:cordova', proxy, { singleton: true, instantiate: false });
    application.inject('route', 'cordova', 'proxy:cordova');
}

export default {
  name: 'cordova',
  initialize: initialize
};