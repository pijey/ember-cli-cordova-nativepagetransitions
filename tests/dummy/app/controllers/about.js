import Ember from 'ember';

export default Ember.Controller.extend({
	backTransitionOptions: {
		"direction"      : "left", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
		"duration"       :  600, // in milliseconds (ms), default 400
	}
});
