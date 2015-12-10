import Ember from 'ember';
export default Ember.Object.extend({
	nptTransition: {
	    transitionOptions: {
	      "direction"        : "left",
	        "duration"         :  400,
	        "slowdownfactor"   :    1,
	        "iosdelay"         :  -1,
	        "androiddelay"     :  -1,
	        "winphonedelay"    :  -1,
	        "fixedPixelsTop"   :    0,
	        "fixedPixelsBottom":   0 
	    },
	    transitionType: "slide"
	}
});